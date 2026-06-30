package com.michele.qa.service;

import com.michele.qa.client.ProductClient;
import com.michele.qa.factory.ProductFactory;
import io.restassured.response.Response;

public class ProductService {

    private final ProductClient productClient = new ProductClient();

    public Response buscarProdutosPorTermo(String termo) {
        return productClient.buscarProdutos(termo);
    }

    public Response buscarProdutoPorId(int id) {
        return productClient.buscarProdutoPorId(id);
    }

    public Response buscarProdutoInexistente() {
        return productClient.buscarProdutoInexistente();
    }

    public Response criarProdutoComPayloadValido() {
        return productClient.criarProduto(ProductFactory.novoProduto());
    }

    public Response criarProdutoComPayloadInvalido() {
        return productClient.criarProduto(ProductFactory.produtoInvalido());
    }

    public Response atualizarProdutoExistente() {
        return productClient.atualizarProduto(1, ProductFactory.novoProduto());
    }

    public Response deletarProdutoExistente() {
        return productClient.deletarProduto(1);
    }

    public Response chamarMetodoHttpInvalido() {
        return productClient.metodoInvalido();
    }
}