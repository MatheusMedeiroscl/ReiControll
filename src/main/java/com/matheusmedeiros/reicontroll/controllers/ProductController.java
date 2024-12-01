package com.matheusmedeiros.reicontroll.controllers;


import com.matheusmedeiros.reicontroll.entitites.Client;
import com.matheusmedeiros.reicontroll.entitites.Products;
import com.matheusmedeiros.reicontroll.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/product")
@CrossOrigin(origins = "*", allowedHeaders = "*") // Permitir qualquer origem e cabeçalho

public class ProductController {

    @Autowired
    ProductRepository repository;

    Products products;

    @GetMapping
    private List<Products> getAll(){
        List<Products> result = repository.findAll();

        return  result;
    }

    @GetMapping( value = "/{id}")
    private ResponseEntity<?> getById(@PathVariable Long id){
        products = repository.findById(id).orElse(null);

        if (products == null){
            return ResponseEntity.notFound().build();
        }else {
            return ResponseEntity.status(HttpStatus.OK).body(products);
        }
    }

    @PostMapping
    private ResponseEntity<Products> create(@RequestBody Products newProduct) {
        products  = repository.save(newProduct);
        return ResponseEntity.status(HttpStatus.CREATED).body(products);
    }


    @PutMapping( value = "/{id}")
    private ResponseEntity<?> update(@PathVariable Long id, @RequestBody Products updateProducts){
        products = repository.findById(id).orElse(null);

        if (products == null){
            return ResponseEntity.notFound().build();
        }else {
            products.setProduct_type(updateProducts.getProduct_type());
            products.setValidity(updateProducts.getValidity());
            products.setStorage(updateProducts.getStorage());
            products.setName(updateProducts.getName());

            return ResponseEntity.ok().body(products);
        }
    }

    @DeleteMapping( value = "/{id}")
    private ResponseEntity<?> delete(@PathVariable Long id){
        products = repository.findById(id).orElse(null);

        if (products == null){
            return ResponseEntity.notFound().build();
        }else {
            repository.deleteById(id);
            return ResponseEntity.status(HttpStatus.OK).body(products);

        }
        }
}
