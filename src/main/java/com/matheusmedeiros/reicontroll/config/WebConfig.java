package com.matheusmedeiros.reicontroll.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {

    public void addCorsMappings(CorsRegistry registry) {
         registry.addMapping("/**")
                 .allowedOrigins("*") // Permitir qualquer origem
                 .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH") // Permitir todos os métodos HTTP
                 .allowedHeaders("*") // Permitir todos os cabeçalhos
                 .exposedHeaders("*") // Permitir todos os cabeçalhos na resposta
                 .allowCredentials(false); // Não exigir credenciais
    }
}
