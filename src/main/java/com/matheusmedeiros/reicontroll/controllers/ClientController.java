package com.matheusmedeiros.reicontroll.controllers;


import com.matheusmedeiros.reicontroll.entitites.Client;
import com.matheusmedeiros.reicontroll.repositories.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/client")
@CrossOrigin(origins = "*", allowedHeaders = "*") // Permitir qualquer origem e cabeçalho
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


    @PutMapping(value = "/{id}")
    private ResponseEntity<?> update(@PathVariable Long id, @RequestBody Client updateClient) {
        // Busca o cliente pelo ID
        Client client = repository.findById(id).orElse(null);

        if (client == null) {
            return ResponseEntity.notFound().build(); // Se o cliente não for encontrado
        } else {
            // Atualiza apenas os campos que foram modificados

            // Verifica se o nome da empresa foi modificado
            if (updateClient.getCompany_name() != null) {
                client.setCompany_name(updateClient.getCompany_name());
            }

            // Verifica se o nome do proprietário foi modificado
            if (updateClient.getOwner_name() != null) {
                client.setOwner_name(updateClient.getOwner_name());
            }

            // Verifica se o endereço foi modificado
            if (updateClient.getAdress() != null) {
                client.setAdress(updateClient.getAdress());
            }

            // Verifica se o CNPJ foi modificado
            if (updateClient.getCNPJ() != null) {
                client.setCNPJ(updateClient.getCNPJ());
            }

            // Salva as mudanças no banco de dados
            repository.save(client);

            return ResponseEntity.ok(client); // Retorna a resposta com os dados atualizados
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
