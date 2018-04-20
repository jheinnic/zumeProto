'use strict';

const identity = {
  'accounting.invoice.issued': event => event.data.orderId,
  'delivery.order.submitted': event => event.aggregate.id
};

type Aggregate<State> = {
  is: "pristine" | keyof State;
};

interface HandleInvoiceState {
    pristine: String;
    foo: String;
}

interface HandleInvoiceAggregate extends Aggregate<HandleInvoiceState> {
  isChecked: boolean;
  is: "pristine" | keyof HandleInvoiceState;
}

const initialState: HandleInvoiceAggregate = {
  isChecked: false,
  is: 'pristine'
};

const transitions = {};

export const when = {};

// module.exports = { when };
