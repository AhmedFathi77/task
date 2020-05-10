package com.example.uniliverapp.model;


import lombok.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.List;


@Entity
@Table(name = "Employee")

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString



public class Employees {
    @Id
    @GeneratedValue
    private int id;
    private String name;
    private int salary;
    private int age ;
    private int dep_id;
}


//interface employeesSearch extends JpaRepository<Employees, Long> {
//    @Query("select e from Employee e where name like %?1%")
//    List<Employees> search(String name, int age , int salary , int dep_id );
//}