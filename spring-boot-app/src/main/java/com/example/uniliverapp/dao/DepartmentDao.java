package com.example.uniliverapp.dao;

import com.example.uniliverapp.model.Department;
import org.springframework.data.repository.CrudRepository;

public interface DepartmentDao extends CrudRepository<Department , Integer> {

}
