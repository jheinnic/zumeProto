'use strict';
exports.__esModule = true;
var identity = {
    'accounting.invoice.issued': function (event) { return event.data.orderId; },
    'delivery.order.submitted': function (event) { return event.aggregate.id; }
};
var initialState = {
    isChecked: false,
    is: 'pristine'
};
var transitions = {};
exports.when = {};
