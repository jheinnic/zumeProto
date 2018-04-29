/**
 * Created by prazak on 19.4.16.
 */

'use strict';
import angular from 'angular';
import module from './module';
import d3 from 'd3';
import config from 'app/appConfig';

/**
 * Paging component.
 * @returns {{restrict: string, link: linker, scope: {page: string, docCount: string, pageSize: string}}}
 * @constructor
 */
function ScrollPagingDirective() {
    return {
        restrict: 'E',
        link: linker,
        scope: {
            page: '=',
            docCount: '=',
            pageSize: '='
        }
    };

    function linker(scope, element)
    {
        var page_count, progressbarBase, scrollTime, progressbar, progressbarWidth,
            unit_width;
        init();

        /**
         * Initialization.
         */
        function init()
        {
            scope.pageSize = Math.round(Math.min(window.outerHeight, window.outerWidth) /
                config.visualization.magicConstant);
            scrollTime = (new Date()).getTime();

            progressbarWidth = window.outerWidth *0.6;

            progressbarBase = d3.select('body').append('div')
                .attr('class', 'progressbar_base')
                .style('width', progressbarWidth + 'px')
                .style('opacity', 0);

            progressbar = d3.select('body').append('div')
                .attr('class', 'progressbar')
                .style('opacity', 0);
            addScrollListener(element[0]);
            scope.$watch('docCount', newData);
            scope.$watch('page', showProgress);

        }

        function newData(docCount)
        {
            page_count = Math.ceil(docCount / scope.pageSize);
            unit_width = progressbarWidth / page_count;
            showProgress(1,0); // a little cheating
        }

        /**
         * Adds listener to mouse wheel.
         * @param element
         */
        function addScrollListener(element) {

            // $(element).bind('DOMMouseScroll', onScroll);
            if (element.addEventListener) {
                // IE9, Chrome, Safari, Opera
                element.addEventListener('mousewheel', onScroll, false);
                // Firefox
                element.addEventListener('DOMMouseScroll', onScroll, false);
            }
            // IE 6/7/8
            else element.attachEvent('onmousewheel', onScroll);
        }

        /**
         * Action on scroll - paging.
         * @param e
         * @returns {boolean}
         */
        function onScroll(e) {
            /* if (scope.model == null) {
             return;
             }*/
            e = window.event || e;
            var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

            var time = (new Date()).getTime();
            if (time - scrollTime < 1000) {
                return;
            }
            else {
                scrollTime = time;
            }

            var page;
            if (delta > 0) { //scroll down
                page = scope.page - 1;
                if (page > 0)
                {
                    scope.page = page;
                    scope.$apply();
                }

            }
            else { //scroll up
                page = scope.page + 1;
                if (page <= page_count)
                {
                    scope.page = page;
                    scope.$apply();
                }
            }
            //prevent page fom scrolling
            return false;
        }

        /**
         * Shows progess (page number / all pages) on progress bar.
         * @param newPage
         * @param oldPage
         */
        function showProgress(newPage, oldPage)
        {
            if (newPage === oldPage) {
                return;
            }
            progressbar.transition()
                .duration(20)
                .style('opacity', 1)
                .transition()
                .duration(500)
                .style('width', (scope.page) * unit_width + 'px')
                .transition()
                .duration(800)
                .style('opacity', 0);

            progressbarBase.transition()
                .duration(20)
                .style('opacity', 1)
                .transition()
                .duration(1300)
                .style('opacity', 0);
        }
    }
}

ScrollPagingDirective.$inject = [];

angular.module(module.name)
    .directive('scrollPaging', ScrollPagingDirective);