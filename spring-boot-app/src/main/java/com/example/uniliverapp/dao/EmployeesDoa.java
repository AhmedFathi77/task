package com.example.uniliverapp.dao;

import com.example.uniliverapp.model.Employees;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface EmployeesDoa extends CrudRepository<Employees, Integer>{
    @Query("select s from Employees s where s.name like %?1% and s.age = ?2 and s.salary = ?3 and s.dep_id = ?4")
    public List<Employees> filters(@PathVariable(required = false) String name ,
                                   @PathVariable(required = false) Integer age ,
                                   @PathVariable(required = false) Integer salary ,
                                   @PathVariable(required = false) Integer dep_id);

//    @Query("select s from Employees s where s.name like %?1% and s.age = ?1%")
//    public List<Employees> findByNameLike(@Param("name") String name , @Param("age") String age);

}
