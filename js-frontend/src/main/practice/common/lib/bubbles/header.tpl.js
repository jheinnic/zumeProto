(function(System, SystemJS) {System.register([], function (_export) {
    'use strict';

    var _module;

    return {
        setters: [],
        execute: function () {
            try {
                _module = angular.module('common/templates');
            } catch (e) {
                _module = angular.module('common/templates', []);
            }
            _module.run(['$templateCache', function ($templateCache) {
                $templateCache.put('common/templates/header.tpl.html', '<nav class="navbar navbar-inverse navbar-fixed-top"><div class="container big-search navbar-header"><div class="col-sm-2 col-md-2 col-xl-2"><a class="navbar-brand" href="" ui-sref="search({query: defaultQuery, type: \'_all\'})">LOGO</a></div><search-form></search-form><div class="col-sm-2 col-md-2 col-xl-2"><b class="navbar-brand navbar-loud" ng-if="totalDocs > 0">{{pageStart}} - {{pageEnd}} of {{totalDocs}}</b> <b class="navbar-brand navbar-loud" ng-if="totalDocs === 0">No results found</b></div><div class="col-sm-2 col-md-2 col-xl-2"><a class="navbar-brand navbar-loud" href="" ng-click="addFilter()" ng-show="canFilter"><i class="glyphicon glyphicon-plus"></i> Add filter</a></div></div></nav>');
            }]);
            _export('module', _module);

            _export('default', 'common/templates/header.tpl.html');
        }
    };
});
})(System, System);