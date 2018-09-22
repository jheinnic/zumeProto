package name.jchein.demo.zumepizza.common.test;

import net.chrisrichardson.eventstore.examples.customersandorders.common.domain.Money;
import net.chrisrichardson.eventstore.examples.customersandorders.common.order.OrderState;
import net.chrisrichardson.eventstore.examples.customersandorders.ordershistorycommon.CustomerView;
import net.chrisrichardson.eventstore.examples.customersandorders.ordershistorycommon.OrderInfo;
import net.chrisrichardson.eventstore.examples.customersandorders.ordershistorycommon.OrderView;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import lombok.extern.slf4j.Slf4j;

import static name.jchein.demo.zumepizza.common.test.TestUtil.eventually;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;

@Slf4j
public abstract class AbstractCustomerAndOrdersIntegrationTest {
    protected Logger logger = AbstractCustomerAndOrdersIntegrationTest.log;

    private final Money creditLimit = new Money(1000);

    protected class IntegrationTestCustomerNotFoundException extends RuntimeException {
		private static final long serialVersionUID = -6424922833418049904L;

		public IntegrationTestCustomerNotFoundException(Throwable cause) {
            super(cause);
        }
    }

    @Test
    public void shouldCreateAndApproveOrder() {

        String customerId = createCustomer(creditLimit);

        Money orderTotal = new Money(720);

        String orderId = createOrder(customerId, orderTotal);

        eventually(() -> getOrderView(orderId), o -> o != null && o.getState() == OrderState.APPROVED);

        CustomerView customerView = eventually(() -> getCustomerView(customerId), cv -> {
            OrderInfo orderInfo = cv.getOrders().get(orderId);
            return orderInfo != null && orderInfo.getState() == OrderState.APPROVED;
        });

        assertEquals(creditLimit, customerView.getCreditLimit());
        assertEquals(orderTotal, customerView.getOrders().get(orderId).getOrderTotal());

    }

    @Test
    public void shouldCreateAndRejectOrder() {

        String customerId = createCustomer(creditLimit);

        Money orderTotal = creditLimit.add(new Money(1));

        String orderId = createOrder(customerId, orderTotal);

        eventually(() -> getOrderView(orderId), o -> o != null && o.getState() == OrderState.REJECTED);

        CustomerView customerView = eventually(() -> getCustomerView(customerId), cv -> {
            OrderInfo orderInfo = cv.getOrders().get(orderId);
            return orderInfo != null && orderInfo.getState() == OrderState.REJECTED;
        });

        assertEquals(creditLimit, customerView.getCreditLimit());
        assertEquals(orderTotal, customerView.getOrders().get(orderId).getOrderTotal());

    }

    @Test
    public void shouldRejectOrderWithInvalidCustomerId() {

        Money orderTotal = new Money(720);

        try {
            createOrder("unknown-customer-id", orderTotal);
            fail();
        } catch (IntegrationTestCustomerNotFoundException e) {
            // Expected
        }
    }

    protected abstract CustomerView getCustomerView(String customerId);

    protected abstract OrderView getOrderView(String orderId);

    protected abstract String createOrder(String customerId, Money orderTotal);

    protected abstract String createCustomer(Money creditLimit);
}
