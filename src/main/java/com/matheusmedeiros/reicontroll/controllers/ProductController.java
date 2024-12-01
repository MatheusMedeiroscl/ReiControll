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
        //busca produto pelo ID
        Products product = repository.findById(id).orElse(null);

        if (product == null){
            return ResponseEntity.notFound().build(); // Se o cliente não for encontrado
        }else{
            // Atualiza apenas os campos que foram modificados
            if(updateProducts.getName() != null){
                product.setName(updateProducts.getName());
            }
            if(updateProducts.getProduct_type() != null){
                product.setProduct_type(updateProducts.getProduct_type());
            }
            if(updateProducts.getStorage() != null){
                product.setStorage(updateProducts.getStorage());
            }
            if(updateProducts.getValidity() != null){
                product.setValidity(updateProducts.getValidity());
            }

            repository.save(product);

            return ResponseEntity.ok(product); // Retorna a resposta com os dados atualizados

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
