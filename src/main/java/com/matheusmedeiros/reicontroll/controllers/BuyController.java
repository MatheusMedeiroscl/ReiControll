package com.matheusmedeiros.reicontroll.controllers;

import com.matheusmedeiros.reicontroll.entitites.Buy;
import com.matheusmedeiros.reicontroll.entitites.Products;
import com.matheusmedeiros.reicontroll.repositories.BuyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/buy") // CAMINHO DA REQUISIÇÃO
@CrossOrigin(origins = "*", allowedHeaders = "*") // Permitir qualquer origem e cabeçalho

public class BuyController {
    @Autowired
    BuyRepository repository;

    Buy buy;

    @GetMapping
    private List<Buy> getAll(){
        List<Buy> result = repository.findAll();

        return result;
    }


    @GetMapping( value = "/{id}")
    private ResponseEntity<?> getById(@PathVariable Long id){
        buy = repository.findById(id).orElse(null);

        if (buy == null){
            return ResponseEntity.notFound().build();
        }else {
            return ResponseEntity.status(HttpStatus.OK).body(buy);
        }
    }

    @PostMapping
    private ResponseEntity<Buy> create(@RequestBody Buy newPurchase) {
        Buy buy = repository.save(newPurchase);
        return ResponseEntity.status(HttpStatus.CREATED).body(buy);
    }



    @PutMapping( value = "/{id}")
    private ResponseEntity<?> update(@PathVariable Long id, @RequestBody Buy updatePorchase){
       //Busca da compra pelo ID
        Buy buy = repository.findById(id).orElse(null);

        if (buy == null){
            return ResponseEntity.notFound().build(); // Se a compra não for encontrado
        }else{
            if (updatePorchase.getDay_purchase() != null){
                buy.setDay_purchase((updatePorchase.getDay_purchase()));
            }
            repository.save(buy);

            return ResponseEntity.ok(buy);
        }
    }

    @DeleteMapping( value = "/{id}")
    private ResponseEntity<?> delete(@PathVariable Long id){
        buy = repository.findById(id).orElse(null);

        if (buy == null){
            return ResponseEntity.notFound().build();
        }else {
            repository.deleteById(id);
            return ResponseEntity.status(HttpStatus.OK).body(buy);

        }
    }
}
