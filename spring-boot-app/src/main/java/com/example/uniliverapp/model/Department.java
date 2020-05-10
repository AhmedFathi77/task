package com.example.uniliverapp.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "Department")

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString


public class Department {

    @Id
    @GeneratedValue
    private int dep_id;
    private String dep_name;

}
