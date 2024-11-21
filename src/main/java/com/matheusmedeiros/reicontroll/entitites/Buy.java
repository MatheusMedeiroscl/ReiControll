package com.matheusmedeiros.reicontroll.entitites;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

@Entity
@Table(name = "purchased")
public class Buy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String day_purchase;

    //Foreing_Key
    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client;

    //Foreing_Key
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Products products;


}
