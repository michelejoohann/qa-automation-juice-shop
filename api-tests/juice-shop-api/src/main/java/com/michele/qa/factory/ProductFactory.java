package com.michele.qa.factory;

import com.michele.qa.dto.Product;
import net.datafaker.Faker;

public class ProductFactory {

    private static final Faker faker = new Faker();

    private ProductFactory() {
    }

    public static Product novoProduto() {

        Product produto = new Product();

        produto.setName(faker.commerce().productName());
        produto.setDescription(faker.lorem().sentence());
        produto.setPrice(faker.number().randomDouble(2, 10, 500));
        produto.setImage("teste.jpg");

        return produto;
    }

    public static Product produtoInvalido() {

        Product produto = new Product();

        produto.setName("");
        produto.setDescription("");
        produto.setPrice(-10.0);
        produto.setImage("");

        return produto;
    }
}