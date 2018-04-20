package name.jchein.demo.zumepizza.integration.tomcat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import static org.junit.Assert.assertEquals;

/**
 * Basic integration tests for demo application.
 * 
 * @author John Heinnickel
 */
@RunWith(SpringJUnit4ClassRunner.class)
// @IntegrationTest("server.port:0")
// @SpringApplicationConfiguration(classes = SampleTomcatApplication.class)
@WebAppConfiguration
@SpringBootTest
@DirtiesContext
public class SampleTomcatApplicationTests {

	@Value("${local.server.port}")
	private int port;

	@Test
	public void testHome() throws Exception {
		ResponseEntity<String> entity = new TestRestTemplate().getForEntity(
				"http://localhost:" + this.port, String.class);
		assertEquals(HttpStatus.OK, entity.getStatusCode());
		assertEquals("Hello World", entity.getBody());
	}

	@Test
	@Autowired
	public void testHomeAuto(TestRestTemplate template) throws Exception {
		ResponseEntity<String> entity = template.getForEntity(
				"http://localhost:" + this.port, String.class);
		assertEquals(HttpStatus.OK, entity.getStatusCode());
		assertEquals("Hello World", entity.getBody());
	}
}
