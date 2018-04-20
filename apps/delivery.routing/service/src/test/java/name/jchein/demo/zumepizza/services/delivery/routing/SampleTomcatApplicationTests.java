package name.jchein.demo.zumepizza.services.delivery.routing;

//import static org.junit.Assert.assertEquals;
//
//import org.junit.ClassRule;
//import org.junit.Rule;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.beans.factory.config.ConfigurableBeanFactory;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.web.client.TestRestTemplate;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.context.annotation.Scope;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.test.annotation.DirtiesContext;
//import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
//import org.springframework.test.context.junit4.rules.SpringClassRule;
//import org.springframework.test.context.junit4.rules.SpringMethodRule;
//import org.springframework.test.context.web.WebAppConfiguration;

/**
 * Basic integration tests for demo application.
 * 
 * @author John Heinnickel
 */
//// @IntegrationTest("server.port:0")
//// @SpringApplicationConfiguration(classes = SampleTomcatApplication.class)
//@WebAppConfiguration
//@SpringBootTest
//@DirtiesContext
//public class SampleTomcatApplicationTests {
//   @ClassRule
//   public static final SpringClassRule springClassRule = new SpringClassRule();
//
//   @Rule
//   public final SpringMethodRule springMethodRule = new SpringMethodRule();
//
//
//	@Configuration
//	public static class InnerConfiguration {
//		@Bean
//		@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
//		TestRestTemplate testRestTemplate() {
//			return new TestRestTemplate();
//		}
//	}
//
//	@Value("${server.port}")
//	private int port;
//
//	@Autowired
//	private TestRestTemplate autoTemplate;
//	
//	@Test
//	public void testHome() throws Exception {
//		ResponseEntity<String> entity = new TestRestTemplate().getForEntity(
//				"http://localhost:" + this.port, String.class);
//		assertEquals(HttpStatus.NOT_FOUND, entity.getStatusCode());
////		assertEquals("Hello World", entity.getBody());
//	}
//
//	@Test
//	public void testHomeAuto() throws Exception {
//		ResponseEntity<String> entity = this.autoTemplate.getForEntity(
//				"http://localhost:" + this.port, String.class);
//		assertEquals(HttpStatus.NOT_FOUND, entity.getStatusCode());
////		assertEquals("Hello World", entity.getBody());
//	}
//}
