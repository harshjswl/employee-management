package com.fullStack.projectBackend.Config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.tags.Tag;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI myCustomConfig() {
        return new OpenAPI()
                .info(new Info()
                        .title("Employees App Backend APIs")
                        .description("By Harsh Jaiswal"))
                .tags(Arrays.asList(
                        new Tag().name("User APIs")
                ));
    }
}
