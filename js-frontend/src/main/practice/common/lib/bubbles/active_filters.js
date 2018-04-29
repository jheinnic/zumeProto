/**
 * Created by ondraprazak on 5.5.16.
 */

import angular from 'angular';
import module from './module';
import template from './templates/active_filters.tpl';
import d3 from 'd3';
import config from 'app/appConfig';

/**
 * Filters visualization component.
 * @param $location
 * @param $timeout
 * @param $compile
 * @returns {{restrict: string, link: linker, templateUrl, scope: {filters: string, filterRemoved: string, newFilter: string}}}
 * @constructor
 */
function ActiveFiltersDirective($location, $timeout, $compile) {
    return {
        restrict: 'E',
        link: linker,
        templateUrl: template,
        scope: {
            /*
                array of filters with label field
             */
            filters: '=',
            filterRemoved: '=',
            newFilter: '='
        }
    };

    function linker(scope, element)
    {
        var svg, color, tooltipDiv;
        init();


        /**
         * Initializes active_filters component. Prepares svg element.
         */
        function init()
        {
            d3.selectAll('.filtooltip').remove();

            scope.$watchCollection('filters', filtersChanged);

            d3.select("active-filters")
                .style("height", Math.floor(window.outerHeight  * 0.75) + "px")
                .style("width", Math.floor(window.outerWidth / 8) + "px")
               .style("overflow", "hidden")
                .style("padding", "10px");

            var div = d3.select(element[0]).append("div")
                .style("width", "115%")
                .style("height", "105%")
               .style("overflow", "scroll");

            color = d3.scale.category10();
            svg = div.append('svg')
                .attr('width', "100%")
                .attr('height', "0");

            tooltipDiv = d3.select('body').append('div')
                .attr('class', 'tooltip filtooltip')
                .style('opacity', 0);

        }
        

        /**
         * invoked when some filter has been added or removed either locally or externally
         * @param newVal
         * @param oldVal
         */
        function filtersChanged(newVal) {
            svg.selectAll('g').remove();
            draw(newVal);
        }

        /**
         * Creates groups representing filters.
         * @param data
         * @returns {*}
         */
        function prepareNodes(data) {
            var nodes = svg.selectAll('.node')
                .data(data)
                .enter().append('g')
                .attr('class', 'node')
                .attr('transform', function (d, i) {
                    return 'translate(120,' +  (50 + i * 90) + ')';
                })
                ;

            nodes.on('click', function (d, i) {
                d3.selectAll('.filtooltip').style('opacity', 0);
                removeFilter(i);
            });
            return nodes;

        }

        /**
         * Creates ellipses and appends them to groups representing filters.
         * @param nodes svg group elements
         * @returns {*}
         */
        function drawEllipses(nodes) {
            var ellipses = nodes.append('ellipse')
                .attr("rx", "25%")
                .attr("ry", "40px")
                .attr("opacity", 1)
                .attr('fill', function (d, i) {
                    // return color(d.label[0]);
                    return 'url(' + $location.absUrl() + '#grad' + (i % 10) + ')';
                })
                .attr('class', 'xxselectable');

           /* ellipses.transition()
                .duration(2000)
                .style('opacity', 1)
                .attr('fill', function (d, i) {
                    // return color(d.label[0]);
                    return 'url(' + $location.absUrl() + '#grad' + (i % 10) + ')';
                });*/

            return ellipses;
        }


        /**
         * Appends texts to groups representing filters.
         * @param nodes
         * @returns {*}
         */
        function drawTexts(nodes) {
            var text = nodes.append('text')
                .attr('dy', '.3em')
                .style('text-anchor', 'middle')
                .style('opacity', 1)
                .attr('class', 'xxselectable')
                .style('fill', function(d, i) {
                    return "black";
                })
                .style('font-size', "15px")
                .text(function (d) {
                    if (d.label[0].length > 10) {
                        return d.label[0].substring(0, 10) + '..';
                    }
                    else {
                        return d.label[0];
                    }
                });

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
                            return Math.max(d.label[0].length * 10 + 10, 200) + 'px';
                        });
                    tooltipDiv.html(d.label[0] + '<br>Click to remove.' )
                        .style('left', (d3.event.pageX) + 'px')
                        .style('top', (d3.event.pageY - 50) + 'px');

                    d3.select(this).select('text').style('font-weight', 'bold');
                })
                .on('mouseout', function () {
                    tooltipDiv.transition()
                        .duration(config.visualization.tooltipTransitionTime)
                        .style('opacity', 0);
                    d3.select(this).select('text').style('font-weight', 'normal');

                });
        }

        /**
         * Draws the content of the svg element.
         * @param data
         */
        function draw(data) {

            svg.style("width", "100%").style("height", (50 + scope.filters.length * 90) + "px");

            svg.append('rect')
                .attr('width', '100%')
                .attr('height', '100%')
                .attr('fill', 'white');

            var nodes = prepareNodes(data);


            drawEllipses(nodes);

            drawTexts(nodes);

            drawTooltips(nodes);

            d3.select(self.frameElement).style('height', '100%');

        }

        /**
         * Removes filter on index specified and lets the rest of application know about it
         * @param index
         */
        function removeFilter(index) {
            
            var filter = scope.filters[index];
            scope.filters.splice(index, 1);
            scope.filterRemoved(filter);
            scope.$apply();
        }
    }
}

angular.module(module.name)
    .directive('activeFilters', ActiveFiltersDirective);

export default ActiveFiltersDirective;