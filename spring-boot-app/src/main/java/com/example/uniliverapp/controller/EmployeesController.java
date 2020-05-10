package com.example.uniliverapp.controller;



import com.example.uniliverapp.dao.EmployeesDoa;
import com.example.uniliverapp.model.Employees;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

//interface EmployeeRepository extends JpaRepository<Employees , Long>{
//    @Query("select s from Employee e where name Like %?1%")
//    List<Employees> findByName(String name);
//}

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/employee")

public class EmployeesController {

    @Autowired
    private EmployeesDoa dao;

    @PostMapping("/create-employee")
    public Employees createEmployee(@RequestBody Employees emp){
        dao.save(emp);
        return dao.save(emp);
    }

    @GetMapping("/get-employees")
    public List<Employees> getEmployees(){
        return (List<Employees>) dao.findAll();
    }

//    @GetMapping("/filter-employees")
//    public List<Employees> filter(@RequestParam Optional<String>  name){
//        return dao.findByName(name.orElse("_"));
//    }
//    @GetMapping("/filter-employees")
//    public List<Employees> filterEmployees(
//            @RequestParam("name") Optional<String>  name,
//            @RequestParam("age") Optional<Integer> age,
//            @RequestParam("salary") Optional<Integer> salary,
//            @RequestParam("dep_id") Optional<Integer> dep_id
//            ) {
//
//
//        return (List<Employees>) dao.findNameBeLikeA("%"+name+"%d");
//        if (name == null || age == undefind || salary == undefind || dep_id == undefind) {
//            return (List<Employees>) dao.findAll();
//        } else {
//            return (List<Employees>)dao.findAll();
//        }
 //   }

    @PutMapping("/update-employee/{id}")
    public Employees updateEmployee(@PathVariable int id, @Valid @RequestBody Employees emp) {
//        if (!dao.findById(id).isPresent()) {
//            return "404 , Error finding ID";
//        }
//        dao.save((emp));
      return dao.save((emp));
    }

    @DeleteMapping("/delete-employee/{id}")
    public String deleteEmployee(@PathVariable int id) {
        if (!dao.findById(id).isPresent()) {
            return "404 , Error finding ID";
        }
        dao.deleteById(id);
        return "200";
    }
    @GetMapping("/filter/")
    public List<Employees> searchFilters(@RequestParam Optional<String>  name ,
                                      @RequestParam Optional<Integer>  age ,
                                      @RequestParam Optional<Integer>  salary ,
                                      @RequestParam Optional<Integer>  dep_id
                                      ){
        return dao.filters(name.orElse("-") , age.orElse(null) , salary.orElse(null) , dep_id.orElse(null));
    }
}
