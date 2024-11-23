package com.matheusmedeiros.reicontroll.controllers;


import com.matheusmedeiros.reicontroll.entitites.Buy;
import com.matheusmedeiros.reicontroll.entitites.Client;
import com.matheusmedeiros.reicontroll.repositories.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/client")
public class ClientController {


    @Autowired
    private ClientRepository repository;
    Client client;
    /*GET DE TODOS OS CLIENTES CADASTRADOS*/
    @GetMapping
    private List<Client> getAll(){
        List<Client> result = repository.findAll();

        return result;
    }

    /*GET DE CLIENTE PELO ID*/
    @GetMapping(value = "/{id}")
    private ResponseEntity<?> getById(@PathVariable Long id){
        client = repository.findById(id).orElse(null);

        if (client == null){
            return ResponseEntity.notFound().build();
        }else {
            return ResponseEntity.status(HttpStatus.OK).body(client);
        }
    }

    /*CREATE DE UM NOVO CLIENTE*/
    @PostMapping
    private ResponseEntity<Client> create(@RequestBody Client newClient) {
        client  = repository.save(newClient);
        return ResponseEntity.status(HttpStatus.CREATED).body(client);
    }


    /*UPDATE DOS DADOS DE UM CLIENTE*/
    @PutMapping(value = "/{id}")
    private ResponseEntity<?> update(@PathVariable Long id, @RequestBody Client updateClient){
        client = repository.findById(id).orElse(null);

        if (client == null){
            return ResponseEntity.notFound().build();
        }else {
            client.setCompany_name(updateClient.getCompany_name());
            client.setOwner_name(updateClient.getOwner_name());
            client.setAdress(updateClient.getAdress());
            client.setCNPJ(updateClient.getCNPJ());

            repository.save(client);
            return ResponseEntity.ok(client);


        }
    }

    /*DELETE DE UM CLIENTE*/
    @DeleteMapping(value = "/{id}")
    private ResponseEntity<?> delete(@PathVariable Long id){
        client = repository.findById(id).orElse(null);

        if (client == null){
            return ResponseEntity.notFound().build();
        }else{
            repository.deleteById(id);
            return ResponseEntity.ok(client);
        }
    }


}
