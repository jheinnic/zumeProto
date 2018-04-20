// package name.jchein.demo.zumepizza.integration.tomcat;
//
//
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.boot.SpringApplication;
//import org.springframework.boot.autoconfigure.context.PropertyPlaceholderAutoConfiguration;
//import org.springframework.boot.autoconfigure.web.DispatcherServletAutoConfiguration;
//import org.springframework.boot.autoconfigure.web.EmbeddedServletContainerAutoConfiguration;
//import org.springframework.boot.autoconfigure.web.HttpMessageConvertersAutoConfiguration;
//import org.springframework.boot.autoconfigure.web.ServerPropertiesAutoConfiguration;
//import org.springframework.boot.autoconfigure.web.WebMvcAutoConfiguration;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.web.client.TestRestTemplate;
//import org.springframework.context.annotation.ComponentScan;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.context.annotation.Import;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.test.annotation.DirtiesContext;
//import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
//import org.springframework.test.context.web.WebAppConfiguration;
//
//import name.jchein.demo.zumepizza.services.manifests.application.BootManifestIngestionApp;
//import name.jchein.demo.zumepizza.services.manifests.controller.HomeController;
//import name.jchein.demo.zumepizza.services.manifests.controller.IngestTasksApiController;
//
//import static org.junit.Assert.assertEquals;
//
//
///**
// * Basic integration tests for demo application.
// * 
// * @author John Heinnickel
// */
//@RunWith(SpringJUnit4ClassRunner.class)
//@WebAppConfiguration
//// @SpringApplicationConfiguration(classes = NonAutoConfigurationSampleTomcatApplication.class)
//// @WebIntegrationTest("server.port=0")
//@SpringBootTest
//@DirtiesContext
//public class NonAutoConfigurationSampleTomcatApplicationTests
//{
//
//	@Value("${local.server.port}")
//	private int port;
//
//
//	@Configuration
//	@Import({
//		EmbeddedServletContainerAutoConfiguration.class, DispatcherServletAutoConfiguration.class,
//		ServerPropertiesAutoConfiguration.class, WebMvcAutoConfiguration.class,
//		HttpMessageConvertersAutoConfiguration.class, PropertyPlaceholderAutoConfiguration.class
//	})
//	@ComponentScan(
//		basePackageClasses =
//	{
//		IngestTasksApiController.class, HomeController.class
//	})
//	public static class NonAutoConfigurationSampleTomcatApplication
//	{
//
//		public static void main(String[] args) throws Exception
//		{
//			SpringApplication.run(BootManifestIngestionApp.class, args);
//		}
//
//	}
//
//
//	@Test
//	public void testHome() throws Exception
//	{
//		ResponseEntity<String> entity =
//			new TestRestTemplate().getForEntity("http://localhost:" + this.port, String.class);
//		assertEquals(HttpStatus.OK, entity.getStatusCode());
//		assertEquals("Hello World", entity.getBody());
//	}
//
//}
