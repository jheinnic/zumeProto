// package name.jchein.demo.bstocksolutions.webui;
//
//
// import java.util.List;
//
// import org.springframework.context.annotation.Configuration;
// import org.springframework.context.annotation.Profile;
// import org.springframework.http.converter.HttpMessageConverter;
// import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
// import org.springframework.web.servlet.config.annotation.EnableWebMvc;
// import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
//
//
// @Configuration
// @EnableWebMvc
// @Profile("mvc")
// public class WebMvcConfig
// extends WebMvcConfigurerAdapter
// {
// // @Bean
// // public CORSFilter corsFilter()
// // {
// // return new CORSFilter();
// // }
//
// @Override
// public void extendMessageConverters(final List<HttpMessageConverter<?>> converters)
// {
// final HttpMessageConverter<?> additional = new MappingJackson2HttpMessageConverter();
// converters.add(additional);
// }
//
// // @Bean
// // public HttpExceptionHandler httpExceptionHandler()
// // {
// // return new HttpExceptionHandler();
// // }
// }
