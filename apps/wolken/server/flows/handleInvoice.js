'use strict';

const identity = {
  'accounting.invoice.issued': event => event.data.orderId,
  'delivery.order.submitted': event => event.aggregate.id
};

const initialState = {
  isChecked: false,
  is: 'pristine'
};

const transitions = {};

const when = {};

module.exports = { when };
