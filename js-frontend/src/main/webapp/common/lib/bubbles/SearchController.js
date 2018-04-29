import header from 'common/templates/header.tpl';
import 'angular-aside';
import './templates/tableView.tpl';
import './templates/graphView.tpl';
import config from 'app/appConfig';
import aside from './templates/aside.tpl';
import colors from 'common/components/visualization/templates/gradientColors'
/*import 'assets/angular-aside.min.css!';*/

export class SearchController {

  /*@ngInject*/
  constructor(elastic, $state, $stateParams, $aside, $scope, $rootScope, $document) {
    var self = this;
    this.activeFilterNodes = [];
    this.doc = {};
    this.query = '*';
    $rootScope.query = '*';
    this.docD = {selected: {}};
    this.elastic = elastic;
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.$aside = $aside;
    this.header = header;
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    // TODO remove this
    this.pageSize = Math.round(Math.min(window.outerHeight, window.outerWidth) / config.visualization.magicConstant);
    this.page = 1;
    $rootScope.pageStart = 1;
    $rootScope.pageEnd = this.pageSize;
    $scope.colors = colors;
    $scope.$watch(() => self.page, (newPage, oldPage) => newPage !== oldPage ? self.loadPage(newPage): '');
    //$scope.$watch('search.pageSize', () => self.loadPage(self.page));
    $scope.$watch('search.doc.id', id => self.select(id));
    $scope.$watch('search.docs', () => self.localPaging());
    this.prefix = 'app/components/search/templates/';
    $scope.showDetails = doc => self.showDetails(doc);
    $scope.loadPage = page => self.loadPage(page);
    $scope.removeFilter = filterNode => self.removeFilter(filterNode);
    $rootScope.addFilter = () => self.getAggregableFields();
    this.$document = $document;
    this.updateView(config.search.defaultView);

    this.setUrlState();
    $scope.$watch('search.type', (type) => self.setType(type));
    
  }

  setType(type)
  {
    
    if(angular.isUndefined(type) || type === '_all')
    {
      delete this.elastic.type;
      this.categories = true;
      this.elastic.removeFilters();
      this.activeFilterNodes = [];
      this.elastic.setQuery(this.query);
      this.aggregate().then(()=> this.$state.go('search', { type: '_all', filters: undefined}, {notify:false}));
    }
    else
    {
      this.elastic.type = type;
      this.search(this.query).then(()=>this.$state.go('search', {query: this.$stateParams.query,
            type: this.type},
          {notify:false}));
    }

  }

  setUrlState()
  {
    let self = this;
    if (angular.isUndefined(this.$stateParams.query))
      this.query = '*';
    else
      this.query = unescape(angular.fromJson(this.$stateParams.query));
    this.$rootScope.query = this.query;
    //this.search(this.query);
    this.elastic.removeFilters();
    delete this.elastic.type;
    if(!angular.isUndefined(this.$stateParams.filters))
    {
      let filters = angular.fromJson(this.$stateParams.filters);
      filters.map(filter => {
        if(angular.isString(filter.value))
            filter.value = unescape(filter.value);
        filter.label = unescape(filter.label);
        return filter;
      }).forEach(filter => this.elastic.addFilter(filter.type, filter.field, filter.value, filter.label));
      this.activeFilterNodes = this.elastic.filters.map(filter => {
          return {
            label: [(filter.field || filter.value.field) + ': ' + filter.label],
            id: filter.field,
            type: 'filter',
            filter: filter
          };
        });
    }
    if(!angular.isUndefined(this.$stateParams.type) && this.$stateParams.type !== '_all')
    {
      this.type = this.$stateParams.type;
      this.elastic.type = this.type;
      this.search(this.query);
      //this.aggregate();
    }
    else
    {
      this.categories = true;
      this.elastic.setQuery(this.query);
      this.aggregate();
    }
  }

  /**
   * Searches for query, results are saved in "docs" array
   * @param query query to search for
   * @returns elastic response promise to wait for
     */
  search(query)
  {
    
    return this.elastic.search(query, this.pageSize, (this.page - 1) * this.pageSize).then(response => {
      this.docs = response.data.hits.hits.map(hit => SearchController.extract(hit));
      this.docCount = Math.min(response.data.hits.total, config.search.showBestDocuments);
      this.totalDocs = this.$rootScope.totalDocs = response.data.hits.total;
      this.categories = false;
    });
  }

  /**
   * Creates type aggregations of search results
   */
  aggregate()
  {
    return this.elastic.getTypes(config.search.showBiggestCategories).then(response => {
      let docs = response.data.aggregations.type.buckets.map(hit => {
        return{
          label: [hit.key],
          score: hit.doc_count,
          id: hit.key,
          type: 'type',
          filter: {type: 'term', value: hit.key, field: 'type'}
        };

      });
      this.docCount = docs.length;
      this.totalDocs = this.$rootScope.totalDocs = this.docCount;
      this.docs = docs;
    });
  }

  /**
   * Transforms document from elastic response into format better for aggregations
   * @param hit single document returned from elasticsearch
   * @returns transformed document
     */
  static extract(hit)
  {
    let ret = angular.copy(hit._source);
    ret.score = Math.round(hit._score * 100);
    ret.id = hit._id;
    SearchController.findLabel(ret.label);
    return ret;
    // TODO refactor transformation from visualization here
  }

  static findLabel(labels)
  {
    let i = 0;
    while(labels[i].startsWith('ref#')) i++;
    if(i > 0)
    {
      let tmp = labels[0];
      labels[0] = labels[i];
      labels[i] = tmp;
    }
  }

  /**
   * Sets different view
   * @param index index of selected view
     */
  updateView(index)
  {
    this.currentView = this.prefix + config.search.views[index].path + '.html';
  }

  /**
   * Loads new page
     */
  loadPage()
  {
    if(this.categories)
    {
      this.docs = this.docCache.slice((this.page - 1) * this.pageSize, this.page * this.pageSize)
    }
    else
    {
      this.search(this.query);
    }
    this.$rootScope.pageStart = (this.page - 1) * this.pageSize + 1;
    this.$rootScope.pageEnd = Math.min(this.page * this.pageSize, this.totalDocs);
  }

  /**
   * Handles selecting document
   * @param id
     */
  select(id)
  {
    var doc;
    let self = this;
    if(angular.isUndefined(this.docs))
      return;
    doc = this.docs.find(doc => doc.id === id);
    if(angular.isUndefined(doc))
      return;
    if(doc.type === 'type')
    {
      this.type = doc.id;
      /*this.elastic.type = doc.id;
      this.search(this.query).then(()=>this.$state.go('search', {query: this.$stateParams.query,
            type: this.type},
          {notify:false}));*/
      //this.search(this.query);
    }
    else if(doc.type === 'filter')
    {
      this.applyFilter(doc);
    }
    else if(doc.type === 'field')
    {
      this.getAggregations(doc);
    }
    else
      this.elastic.getDetailsMGet([doc.id]).then(detail => self.showDetails(SearchController.extract(detail[0])));
  }

  /**
   * Adds filter from selected filter node
   * @param doc selected node
     */
  applyFilter(doc)
  {
    if(!angular.isUndefined(doc.filter) && this.elastic.addFilter(doc.filter.type, doc.filter.field, doc.filter.value, doc.label[0]))
    {
        /*let newDoc = angular.copy(doc);
        newDoc.label[0] = doc.filter.field + ': ' + doc.label[0];
        let tmp = angular.copy(this.activeFilterNodes);
        tmp.push(newDoc);
        this.activeFilterNodes = tmp;*/
        this.search(this.query).then(()=>this.$state.go('search', {
          filters: angular.toJson(this.elastic.filters, false)} /*{notify:false}*/));
    }
    else
    {
      this.search(this.query);
    }
  }

  removeFilter(filterNode)
  {
    this.elastic.removeFilter(filterNode.filter);
    this.search(this.query).then(()=>this.$state.go('search', {
      filters: angular.toJson(this.elastic.filters)}, {notify:false}));
  }

  /**
   * Loads nodes for fields which can be aggregated by
   */
  getAggregableFields()
  {
    var self = this;
    this.elastic.getAggregatableFields(this.type, ['long', 'date', 'double'],
        {string: mapping => mapping.type === 'string' && mapping.index === 'not_analyzed'}).
        then(fields => {
      let rawFields = [];
      angular.forEach(fields, (fieldsT) =>{
        rawFields = rawFields.concat(fieldsT);
      });
      rawFields = rawFields.filter(field => _.findIndex(config.search.excludeFromAggregation, f => f === field) === -1);
      this.elastic.getFieldCounts(rawFields).then(counts => {
        let docs = [];
        angular.forEach(fields, (fieldsT, key) => {
          
          fieldsT.forEach(field => {
            
            docs.push({
              label: [field.replace(/-/g, ' ')],
              score: counts[field],
              id: field,
              type: 'field',
              datatype: key
            });
          });
        });
        self.docCount = docs.length;
        self.totalDocs = self.$rootScope.totalDocs = self.docCount;
        docs.sort((a, b) => b.score - a.score);
        self.docs = docs;
        self.categories = true;
      });
    });
  }

  /**
   * Create aggregation (filter) nodes for selected field
   * @param field selected field node
     */
  getAggregations(field)
  {
    var self = this;
    var docs = [];
    if(field.datatype === 'long')
    {
      this._numberAggregation(field, true);
    }
    else if(field.datatype === 'double')
    {
      this._numberAggregation(field, false);
    }
    else if(field.datatype === 'date')
    {
      this.elastic.dynamicDateAggregations([field.id]).then(resp =>{
        angular.forEach(resp.data.aggregations[field.id].buckets, (hit, hitKey) => {
          docs.push({
            label: [hitKey],
            score: hit.doc_count,
            id: hitKey,
            type: 'filter',
            filter: {type: 'range', field: field.id, value:{gte: hit.from_as_string, lt: hit.to_as_string}}
          });
        });
        self.docCount = docs.length + 1;
        self.totalDocs = self.$rootScope.totalDocs = self.docCount;
        self.docs = docs;
        self.addAllFieldValues(field);
        self.categories = true;
      });
    }
    else if(field.datatype === 'string')
    {
      this.elastic.getAggCounts([field.id], 'terms', {min_doc_count: 2, size: config.search.showBiggestFilters}).then(resp =>{
        let refs = resp.data.aggregations[field.id].buckets.filter(agg => agg.key.startsWith('ref#')).
          map(agg => agg.key.substring(agg.key.indexOf('#') + 1));
        self.elastic.getDetailsMGet(refs, ['id', 'label']).then(resp2 => {
          let labels = self.getLabels(resp2);
          
          angular.forEach(resp.data.aggregations[field.id].buckets, (hit) => {
            let label = hit.key;
            if(label.startsWith('ref#'))
                label = labels[label.substring(label.indexOf('#') + 1)];
            docs.push({
              label: [label],
              score: hit.doc_count,
              id: hit.key,
              type: 'filter',
              filter: {type: 'term', field: field.id, value: hit.key + ''}
            });
          });
          self.docCount = docs.length + 1;
          self.totalDocs = self.$rootScope.totalDocs = self.docCount;
          self.docs = docs;
          self.addAllFieldValues(field);
          self.categories = true;
        });

      });
    }
  }


  getLabels(labelResp)
  {
    let labels = {};
    //
    labelResp.forEach(hit => {
      if(hit.found)
      {
        SearchController.findLabel(hit._source.label);
        labels[hit._source.id] = hit._source.label[0];
      }
      else
          labels[hit['_id']] = hit['_id'].replace(/-/g, ' ');
    });
    return labels;
  }
  
  addAllFieldValues(field)
  {
    this.docs.push({
      label: ['Any'],
      score: field.score,
      id: 'Any',
      type: 'filter',
      filter: {type: 'exists', value: {field: field.id}}
    });
  }

  /**
   * Adds number aggregation nodes for specified field
   * @param field field node representing the field with to aggregate for
   * @param round round the range boundaries?
   * @private
     */
  _numberAggregation(field, round){
      var self = this;
      var docs = [];
      this.elastic.dynamicNumberAggregations([field.id], round).then(resp =>{
        angular.forEach(resp.data.aggregations[field.id].buckets, (hit, hitKey) => {
          docs.push({
            label: [hitKey],
            score: hit.doc_count,
            id: hitKey,
            type: 'filter',
            filter: {type: 'range', field: field.id, value:{gte: hit.from, lt: hit.to}}
                  });
              });
        self.docCount = docs.length + 1;
        self.totalDocs = self.$rootScope.totalDocs = self.docCount;
        self.docs = docs;
        self.addAllFieldValues(field);
        self.categories = true;
          });
      }

  localPaging()
  {
    if(angular.isUndefined(this.docs))  return;
    
    if(this.docs.length > this.pageSize)
    {
        this.docCache = this.docs;
        this.loadPage(1);
    }
    this.$rootScope.pageStart = (this.page - 1) * this.pageSize + 1;
    this.$rootScope.pageEnd = Math.min(this.page * this.pageSize, this.totalDocs);
  }

  /**
   * Shows details of selected document
   * @param doc selected document node
     */
  showDetails(doc)
  {
    if(angular.isUndefined(this.docs))
      return;
    this.docD.selected = doc;
    if(!angular.isUndefined(this.asideState) && this.asideState.open)
      return;
    if(angular.isUndefined(doc))
      return;
    let self = this;
    this.asideState = {
      open: true,
      position: 'right'
    };
    var ctrl = function($scope, $uibModalInstance, document) {
      $scope.document = document;
      $scope.ok = function(e) {
        $uibModalInstance.close();
        e.stopPropagation();
        
      };
      $scope.cancel = function(e) {
        $uibModalInstance.dismiss();
        e.stopPropagation();
      };
    };
    ctrl.$inject = ['$scope', '$uibModalInstance', 'document'];

    this.aside = this.$aside.open({
      templateUrl: aside,
      placement: 'right',
      size: 'sm',
      backdrop: false,
      controller: ctrl,
      /*appendTo: this.$document.find('aside'),*/
      resolve: {
        document: function () {
          //
          return self.docD;
        }
        }

    }).result.then(() => this.postClose(), () => this.postClose());

  }

  /**
   * Action on closing details window
   */
  postClose() {
    this.asideState.open = false;
    this.doc.id = undefined;
  }

}
