package com.michele.qa.specs;

import com.michele.qa.config.Environment;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.filter.log.LogDetail;
import io.restassured.specification.RequestSpecification;

import static io.restassured.http.ContentType.JSON;

public class RequestSpecs {

    private RequestSpecs() {
    }

    public static RequestSpecification getRequestSpec() {
        return new RequestSpecBuilder()
                .setBaseUri(Environment.getBaseUrl())
                .setContentType(JSON)
                .setAccept(JSON)
                .log(LogDetail.ALL)
                .build();
    }
}