package name.jchein.portfolio.common.uom.configuration;


import java.util.Currency;

import javax.measure.spi.ServiceProvider;
import javax.measure.spi.SystemOfUnitsService;
import javax.measure.spi.UnitFormatService;
import javax.money.CurrencyUnit;
import javax.money.Monetary;
import javax.money.MonetaryAmountFactory;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import org.javamoney.moneta.Money;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;


@Configuration
public class UnitsConfiguration
{
	@Bean
	@Scope(ConfigurableBeanFactory.SCOPE_SINGLETON)
	public ServiceProvider getServiceProvider()
	{
		return ServiceProvider.current();
	}


	@Bean
	@Scope(ConfigurableBeanFactory.SCOPE_SINGLETON)
	public SystemOfUnitsService getSystemOfUnitsService()
	{
		final ServiceProvider provider = getServiceProvider();
		return provider.getSystemOfUnitsService();
	}


	@Bean
	@Scope(ConfigurableBeanFactory.SCOPE_SINGLETON)
	public UnitFormatService getUnitFormatService()
	{
		final ServiceProvider provider = getServiceProvider();
		return provider.getUnitFormatService();
	}
	
	@Bean
	@Scope(ConfigurableBeanFactory.SCOPE_SINGLETON)
	public Currency dollarCurrency()
	{
		return Currency.getInstance("USD");
	}

	@Bean
	@Scope(ConfigurableBeanFactory.SCOPE_SINGLETON)
	public CurrencyUnit dollarCurrencyUnit()
	{
		return Monetary.getCurrency("USD");
	}
	
	@Bean
	@Scope(ConfigurableBeanFactory.SCOPE_SINGLETON)
	public MonetaryAmountFactory<Money> moneyAmountFactory()
	{
		return Monetary.getAmountFactory(Money.class);
	}
}
