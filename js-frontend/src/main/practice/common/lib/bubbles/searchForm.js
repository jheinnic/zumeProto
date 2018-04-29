/**
 * Created by prazak on 25.3.16.
 */

'use strict';
import module from '../module';
import template from '../templates/searchForm.tpl';
//import {SearchFormCtrl as controller} from './SearchFormCtrl';


function searchFormDirective($state, $stateParams, $rootScope) {

    function linker(scope)
    {
        //
        $rootScope.query = $stateParams.query;
        scope.$watch(()=> $stateParams.type, (type)=> {
            scope.canFilter = !angular.isUndefined(type) && type !== '_all';
            
        });
        scope.$watch(()=> $stateParams.query, (query)=> {
            $rootScope.query = unescape(angular.fromJson(query));

        });
        scope.search = function(query){
            $state.go('search',{query: angular.toJson(escape(query)), type: '_all'}, {reload: true, inherit: false});
        };
        //scope.search(scope.query);

    }
    
    return {
        restrict: 'E',
        templateUrl: template,
        link: linker
    };
}
searchFormDirective.$inject = ['$state', '$stateParams', '$rootScope'];
angular.module(module.name)
    .directive('searchForm', searchFormDirective);



export default searchFormDirective;
