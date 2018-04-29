/**
 * Created by ondraprazak on 8.1.16.
 */

'use strict';
import angular from 'angular';
import module from './module';
import template from './templates/bubble_visualization.tpl';
import d3 from 'd3';
import 'assets/visualization.css!';
import config from 'app/appConfig';

/**
 * Data visualizaton component (bubbles).
 * @param $location
 * @returns {{restrict: string, link: linker, templateUrl, scope: {model: string, selected: string, type: string}}}
 * @constructor
 */
function BubbleVisualizationDirective($location) {
    return {
      restrict: 'E',
      link: linker,
      templateUrl: template,
      scope:
      {
        model: '=',
        selected: '=',
        type: '='
      }};

  function linker(scope, element) {
    var svg, width, height, bubble, format, color, tooltipDiv;
    _init();

    /**
     * D3 init here, like element.append()...
     * dynamic data available through scope.model
     * @private
     */
    function _init() {
      d3.selectAll('.vistooltip').remove();
      width = window.outerWidth * 0.8;
      height = window.outerHeight * 0.8;
      format = d3.format(',d');
      color = d3.scale.category10();


      bubble = d3.layout.pack()
          .sort(descending)
          .size([width, height])
          .padding(config.visualization.padding);


      svg = d3.select(element[0]).append('svg')
          .attr('width', width)
          .attr('height', height)
          .attr('class', 'bubble');

      //div for tooltip
      tooltipDiv = d3.select('body').append('div')
          .attr('class', 'tooltip vistooltip')
          .style('opacity', 0);

      scope.$watch('model', onDataChange);
      scope.$watch('selected.id', selectedChanged, true);

     }

      /**
       * Creates groups representing data bubbles.
       * @param data
       * @returns {*}
       */
    function prepareNodes(data) {
      var maxX = 0;
      var minY = 9999999;
      var maxY = 0;
      var nodes = svg.selectAll('.node')
          .data(data)
          .enter().append('g')
          .attr('class', 'node')
          .attr('id', function (d) {
            return d.id;
          })
          .attr('transform', function (d) {
            if (d.x > maxX) maxX = d.x;
            if (d.y < minY) minY = d.y;
            if (d.y > maxY) maxY = d.y;
            return 'translate(' + d.x + ',' + d.y + ')';
          })
          ;

      scope.maxX = maxX;
      scope.minY = minY;
      scope.maxY = maxY;

      nodes.on('click', function (d, index) {

        scope.selectedNode = this;
        scope.selected.id = d.packageName;
        scope.$apply();

          scope.typeClicked = scope.model[0].type;
          sessionStorage.setItem("clickedIndex", index);
      });

      return nodes;
    }

      /**
       * Creates circles and appends them to groups representing bubbles.
       * @param nodes
       * @returns {*}
       */
    function drawCircles(nodes) {
      var circles = nodes.append('circle')
          .attr('r', function (d) {
              if (scope.model.length == 1) {
                  d.r = d.r / 2;
              }
              else if (scope.model.length == 2) {
                  d.r = d.r * 3/4;
              }
            return d.r;
          })
          .attr('fill', function (d, i) {
            return 'url('+ $location.absUrl()+'#grad' + (i % 10) + ')';
          })
          .attr('class', 'xxselectable')
          .style('opacity', 0);

      circles.transition()
          .duration(2000)
          .style('opacity', 1);

      return circles;
    }

      /**
       * Appends texts to groups representing filters.
       * @param nodes
       * @returns {*}
       */
    function drawTexts(nodes) {
          nodes.each(function(d, index1) {
              var className = d.className;
              var tokens = className.split(" ");
              if (tokens.length == 1) {
                  appendText(d3.select(this), d.className.length > 10 ? d.className.substring(0, 10) + '..' : d.className, '.3em');
              }
              else {
                  if (d.className < 11) {
                      appendText(d3.select(this), d.className, '.3em');
                  }
                  else {
                      var length = 0, i, firstLine= "", secondLine = "";
                      for (i = 0; i < tokens.length; i++) {
                          length += tokens[i].length + 1;
                          firstLine += tokens[i] + ' ';
                          if (length > 10) break;
                          if (i < tokens.length -1 && tokens[i + 1].length + length > 10) break;
                      }
                      length = 0;
                      i++;
                      var appendBothLines = false;
                      for (; i < tokens.length; i++) {
                          appendBothLines = true;
                          length += tokens[i].length + 1;
                          secondLine += tokens[i] + ' ';
                          if (length > 10) break;
                          if (i < tokens.length -1 && tokens[i + 1].length + length > 10) break;
                      }
                      if (firstLine.charAt(firstLine.length - 1) == ' ') {
                          firstLine = firstLine.substring(0, firstLine.length - 1);
                      }
                      if (appendBothLines) {
                          if (secondLine.charAt(secondLine.length - 1) == ' ') {
                              secondLine = secondLine.substring(0, secondLine.length - 1);
                          }
                          if (secondLine.length > 10) {
                              secondLine =  secondLine.substring(0, 10) + '..';
                          }
                          else if (i < tokens.length || secondLine.length > 10) {
                              secondLine += "..";
                          }
                          appendText(d3.select(this), firstLine.length > 10 ? firstLine.substring(0, 10) + '..' : firstLine, "-0.2em");
                          appendText(d3.select(this), secondLine, "1em");
                      }
                      else {
                          appendText(d3.select(this), firstLine.length > 10 ? firstLine.substring(0, 10) + '..'  : firstLine, '.3em');
                      }

                  }
              }
          });
    }

      function appendText(nodes, string, dy) {
          var text = nodes.append('text')
              .attr('dy', dy)
              .style('text-anchor', 'middle')
              .style('opacity', 0)
              .attr('class', 'xxselectable')
              .style('fill', function(d, i) {
                  var rgb = d3.select('#grad' + (i % 10)).selectAll('stop')
                      .filter(function (x, i) { return i === 1;}).style('stop-color');
                  return lightenOrDarken(rgb, -150);
              })
              .style('font-size', function (d) {
                  return d.r * 0.3 + 'px';
              })
              .style('font-weight', function () {
                  return 'normal';
              })
              .text(string);

          text.transition()
              .duration(2000)
              .style('opacity', 1);

          return text;
      }

      /**
       * Appends listener to mouseover to groups representing filters - provides tooltips showing and hiding.
       * @param nodes
       */
    function drawTooltips(nodes) {
      //custom tooltips
      nodes.on('mouseover', function (d) {
            tooltipDiv.transition()
                .duration(config.visualization.tooltipTransitionTime)
                .style('opacity', 0.9)
                .style('width', function () {
                  return Math.max(d.className.length, d.value.toString().length) * 10 + 10 + 'px';
                });
            tooltipDiv.html(d.className + '<br>' + d.score)
                .style('left', (d3.event.pageX) + 'px')
                .style('top', (d3.event.pageY - 50) + 'px');

            d3.select(this).selectAll('text').style('font-weight', 'bold');
          })
          .on('mouseout', function () {
            tooltipDiv.transition()
                .duration(config.visualization.tooltipTransitionTime)
                .style('opacity', 0);
            d3.select(this).selectAll('text').style('font-weight', 'normal');

          });
    }
      
      /**
       * Draws the content of the svg element.
       * @param data
       */
    function draw() {
      tooltipDiv.style("opacity", 0);

      var data = bubble.nodes(scope.data)
          .filter(function (d) {
            return !d.children;
          });

      svg.append('rect')
          .attr('width', '100%')
          .attr('height', '100%')
          .attr('fill', 'white');

      var nodes = prepareNodes(data);

      drawCircles(nodes);

      drawTexts(nodes);

      drawTooltips(nodes);

        if (scope.model[0].type == null) { //articles
            appendCategoryLabel();
        }
        else if (scope.model[0].type == 'filter') {
            appendFieldLabel();
        }


      d3.select(self.frameElement).style('height', height + 'px');
    }

      /**
       * Function responding to selection change - selects and disselects nodes.
       * @param id
       */
    function selectedChanged(id) {
      if (angular.isUndefined(id)) {
        // details closed, disselecting animation here
        disselectNodes();
      }
      else {
        //scope.selectedCategoryLabel = id;
        highlightNode(scope.selectedNode);
      }
    }

    /**
     * this function is called when new data are loaded
     * @param newVal
     * @param oldVal
     */
    function onDataChange(newVal) {
      if (angular.isUndefined(newVal) || newVal.length === 0)
        return;
      var id = 0;
      scope.data = {};
      var scores = newVal.map((doc => Number(doc.score)));

      var min = Math.min(...scores);
      var max = Math.max(...scores);
      var doRoot, doPower;
      if (min / max >  config.visualization.minQuotient) {
        doPower = true;
      }
      if (min / max <  config.visualization.maxQuotient) {
        doRoot = true;
      }
      scope.data.children = newVal.map((doc => {
        var value;
        if (doPower) { //rescaling
          value = doc.score * doc.score;
        }
        else if (doRoot) {
          value = Math.sqrt(doc.score);
        }
        else {
          value = doc.score;
        }

        return {
          packageName: doc.id + '',
          className: (doc.label[0] || doc.id) + '',
          value: angular.isUndefined(doc.score) ? 1 : value,
          id: id++,
          score: angular.isUndefined(doc.score) ? 1 : doc.score
        };
      }));
      svg.selectAll('*').remove();
      draw();
    }

      /**
       * Disselects nodes.
       */
      function disselectNodes() {
          var nodes = d3.selectAll('.node');

          var texts = nodes.selectAll('text');
          texts.transition()
              .duration(config.visualization.showTransitionTime)
              .style('font-weight', 'normal')
              .style('font-size', function (d) {
                return d.r * 0.3 + 'px';
              });

          var circles = nodes.select('circle');
          circles.transition()
              .duration(config.visualization.showTransitionTime)
              .attr('r', function (d) {
                return d.r;
              })
              .style('stroke', 'rgba(0,0,0,0)');    // set the line color
    }

      /**
       * Lightens the color if amt is a positive number, darkens if negative.
       * @param fill string according to pattern rgb(xxx,xxx,xxx)
       * @param amt
       * @returns {string}
       */
    function lightenOrDarken(fill, amt) {
      fill = fill.replace('rgb(', '');
      fill = fill.replace(')', '');
      var array = fill.split(',');
      for (var i = 0; i < array.length; i++) {
        array[i] = Number(array[i]) + amt;
        if (array[i] > 255) {
          array[i] = 255;
        }
        else if (array[i] < 0) {
          array[i] = 0;
        }
      }
      return 'rgb(' + array[0] + ',' + array[1] + ',' + array[2] + ')';
    }

      /**
       * Makes the node bigger and draws a thin border around it.
       * @param nodePar
       */
    function highlightNode(nodePar) {
      disselectNodes();
      var node = d3.select(nodePar);
      var circle = node.select('circle');
      //var r = circle.attr('r');
      circle.transition()
          .duration(config.visualization.showTransitionTime)
          //.attr('r', r * 1.2)
          .attr('r', function (d) {
            return d.r * 1.13;
          })
          .style('stroke', function(d) {
            var rgb = d3.select('#grad' + (d.id % 10)).selectAll('stop')
                .filter(function (x, i) { return i === 1;}).style('stop-color');
            return lightenOrDarken(rgb, -20);
          })
          .style('stroke-width', '1px');    // set the line colour;

      node.selectAll('text')
          .transition()
          .duration(config.visualization.showTransitionTime + 100)
          .style('font-size', function (d) {
            return d.r * 1.13 * 0.3 + 'px';
          })
          .style('font-weight', 'bold');

      scope.transform = node.attr("transform");
      scope.radius = circle.attr("r");
    }

      /**
       * Shows category label in the top right corner of svg element.
       */
    function appendCategoryLabel() {

      var node = svg.append('g')
          .attr('class', 'category_node');

      if (scope.typeClicked == 'type') {
        node.attr('transform', scope.transform);
      }
      else {
        node.attr('transform', getTranslateValue(scope.maxX, scope.minY));
      }
      var index = sessionStorage.getItem("clickedIndex");

      var circle = node.append('circle')
          .attr('r', scope.radius)
          .attr("class", "xxselectable")
          .attr('fill', function (d, i) {
            return 'url('+ $location.absUrl() +'#grad' +  (index % 10) + ')';
          })
          .style('opacity', 0);

      var text = node.append('text')
          .attr('dy', '.3em')
          .style('text-anchor', 'middle')
          .style('opacity', 0)
          .attr('class', 'xxselectable')
          .style('fill', function(d) {
            var rgb = d3.select('#grad' + (index % 10)).selectAll('stop')
                .filter(function (x, i) { return i === 1;}).style('stop-color');
            return lightenOrDarken(rgb, -150);
          })
          .style('font-size', function (d) {
            return 25 + 'px';
          })
          .style('font-weight', function () {
            return 'bold';
          })
          .text(function() {
              if (scope.type.length > 10) {
                  return scope.type.substring(0, 10) + '..';
              }
              else {
                  return scope.type;
              }
          });

      circle.transition()
          .duration(1000)
          .attr('r', '80')
          .style('opacity', 1);

      text.transition()
          .duration(1000)
          .style('opacity', 1);

        if (scope.typeClicked == 'type') {
            node.transition()
                .duration(1000)
                .attr('transform', getTranslateValue(scope.maxX, scope.minY));
        }

        node.on('click', function () {
            delete scope.selected.id;
            scope.type = "_all";
            scope.$apply();

        });

        //tooltip
      node.on('mouseover', function (d) {
              tooltipDiv.transition()
                  .duration(config.visualization.tooltipTransitionTime)
                  .style('opacity', 0.9)
                  .style('width', "200px");
              tooltipDiv.html("Go back to gategory selection.")
                  .style('left', (d3.event.pageX) + 'px')
                  .style('top', (d3.event.pageY - 50) + 'px');

              //d3.select(this).selectAll('text').style('font-weight', 'bold');
          })
          .on('mouseout', function () {
              tooltipDiv.transition()
                  .duration(config.visualization.tooltipTransitionTime)
                  .style('opacity', 0);
              d3.select(this).selectAll('text').style('font-weight', 'normal');

          });

        scope.typeClicked = null;

    }


      /**
       * Shows field label in the top right corner of svg element.
       */
      function appendFieldLabel() {

          var node = svg.append('g')
              .attr('class', 'field_node');

          if (scope.typeClicked == 'field') {
              node.attr('transform', scope.transform);
          }
          else {
              node.attr('transform', getTranslateValue(scope.maxX, scope.minY));
          }
          var index = sessionStorage.getItem("clickedIndex");

          var circle = node.append('circle')
              .attr('r', scope.radius)
              .attr('fill', function (d, i) {
                  return 'url('+ $location.absUrl() +'#grad' +  (index % 10) + ')';
              })
              .style('opacity', 0);

          var text = node.append('text')
              .attr('dy', '.3em')
              .style('text-anchor', 'middle')
              .style('opacity', 0)
              .attr('class', 'cdefault')
              .style('fill', function(d) {
                  // return "white";
                  var rgb = d3.select('#grad' + (index % 10)).selectAll('stop')
                      .filter(function (x, i) { return i === 1;}).style('stop-color');
                  return lightenOrDarken(rgb, -150);
              })
              .style('font-size', function (d) {
                  return 25 + 'px';
              })
              .style('font-weight', function () {
                  return 'bold';
              })
              .text(function() {
                  if (scope.selected.id.length > 10) {
                      return scope.selected.id.substring(0, 10) + '..';
                  }
                  else {
                      return scope.selected.id;
                  }
              });

          circle.transition()
              .duration(1000)
              .attr('r', '80')
              .style('opacity', 1);

          text.transition()
              .duration(1000)
              .style('opacity', 1);

          if (scope.typeClicked == 'field') {
              node.transition()
                  .duration(1000)
                  .attr('transform', getTranslateValue(scope.maxX, scope.minY));
          }
      }

      function getTranslateValue(maxX, minY) {
          if (scope.model.length > 3) {
              return 'translate(' + (maxX + 120 ) + ',' + (minY + 10) + ')';
          }
          else if (scope.model.length == 3) {
              return 'translate(' + (maxX + 300 ) + ',' + (minY - 80) + ')';
          }
          else {
              return 'translate(' + (maxX + 330 ) + ',' + (minY - 230) + ')';
          }
      }


      /**
       * Comparator function, returns a positive number if b is bigger than and vice versa.
       * @param a
       * @param b
       * @returns {number} positive if a bigger than b, negative if b bigger than a, zero if equal
       */
    function descending(a, b) {
      var result =   b.value - a.value;
      return result == 0 ? b.className.localeCompare(a.className) : result;
    }
  }
}

BubbleVisualizationDirective.$inject = ['$location'];

angular.module(module.name)
    .directive('bubbleVisualization', BubbleVisualizationDirective);

export default BubbleVisualizationDirective;



