import 'babel/external-helpers';

import angular from 'angular';
import 'angular-ui-router';
import 'ocLazyLoad';
import 'common/core';
import header from 'common/templates/header.tpl';
import 'common/templates/header.tpl';
import common from 'common/module';
import 'common/directives/searchForm';
import routing from 'common/utils/routing';
import 'assets/angular-aside.min.css!';
import 'assets/app.css!';
import 'assets/bootstrap.min.css!';

let app = angular.module('demo', ['ui.router', 'oc.lazyLoad', common.name]);

app.config(routing(app));

app.config(['$urlRouterProvider', '$locationProvider', '$compileProvider', '$logProvider',
  '$httpProvider', '$ocLazyLoadProvider', 
  function ($urlRouterProvider, $locationProvider, $compileProvider,
            $logProvider, $httpProvider, $ocLazyLoadProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  $httpProvider.useApplyAsync(true);
  $urlRouterProvider.otherwise('/search/_all');

  if(window.prod){
    $logProvider.debugEnabled(false);
    // http://ng-perf.com/2014/10/24/simple-trick-to-speed-up-your-angularjs-app-load-time/
    $compileProvider.debugInfoEnabled(false);
  }
  
  $ocLazyLoadProvider.config({
    debug: true
  });
}]);

angular.element(document).ready(function() {
  angular.bootstrap(document.body, [ app.name ], {
    strictDi: true
  });
});
app.run(function ($rootScope) {
  $rootScope.defaultQuery = angular.toJson('*');
  $rootScope.header = header;
});

export default app;
