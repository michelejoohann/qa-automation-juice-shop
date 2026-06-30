package com.michele.qa.base;

import com.michele.qa.specs.RequestSpecs;
import io.restassured.RestAssured;
import org.junit.jupiter.api.BeforeAll;

public class BaseTest {

    @BeforeAll
    static void setup() {
        RestAssured.requestSpecification = RequestSpecs.getRequestSpec();
        RestAssured.enableLoggingOfRequestAndResponseIfValidationFails();
    }
}