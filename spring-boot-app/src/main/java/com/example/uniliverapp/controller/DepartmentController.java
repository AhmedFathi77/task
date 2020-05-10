package com.example.uniliverapp.controller;

import com.example.uniliverapp.dao.DepartmentDao;
import com.example.uniliverapp.model.Department;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/department")

public class DepartmentController {
    @Autowired
    private DepartmentDao dao;

    @PostMapping("/create-department")
    public String createDepartment(@RequestBody List<Department> dep){
        dao.saveAll(dep);
        return "Omda we Fathi Gamdeen : " + dep.size();
    }

    @GetMapping("/get-department")
    public List<Department> getDepartments(){
        return (List<Department>) dao.findAll();
    }


}
