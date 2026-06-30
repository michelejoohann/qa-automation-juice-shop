package com.michele.qa.config;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class Environment {

    private static final Properties properties = new Properties();

    static {
        String env = System.getProperty("env", "dev");
        String filePath = String.format("environments/%s.properties", env);

        try (InputStream inputStream = Environment.class
                .getClassLoader()
                .getResourceAsStream(filePath)) {

            if (inputStream == null) {
                throw new RuntimeException("Arquivo de ambiente não encontrado: " + filePath);
            }

            properties.load(inputStream);

        } catch (IOException e) {
            throw new RuntimeException("Erro ao carregar arquivo de ambiente: " + filePath, e);
        }
    }

    private Environment() {
    }

    public static String getBaseUrl() {
        return properties.getProperty("base.url");
    }
}