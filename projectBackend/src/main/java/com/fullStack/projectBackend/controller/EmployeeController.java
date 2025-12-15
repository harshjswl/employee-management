package com.fullStack.projectBackend.controller;

import com.fullStack.projectBackend.entity.Employee;
import com.fullStack.projectBackend.service.EmployeeService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "*")
@RestController
@Tag(name="User APIs", description = "Create, Get by Id, Update by Id, Deleted by Id, Get All ")
@RequestMapping("/employees")
@Slf4j
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

     @GetMapping("/hello")
    public String hello() { 
        return "Hello i am fine";
    }

    @PostMapping("/save")
    public ResponseEntity<Employee>save(@RequestBody Employee employee){
        log.info("@@@@@@Trying to save data for Employee: "+ employee.getEmpName());
        return ResponseEntity.ok(employeeService.save(employee));
    }

    @GetMapping("/findbyid/{empId}")
    public ResponseEntity<Optional<Employee>>findById(@PathVariable int empId){
        return  ResponseEntity.ok(employeeService.findById(empId));
    }

    @GetMapping("/findall")
    public ResponseEntity<List<Employee>>findAll(){
        return  ResponseEntity.ok(employeeService.findAll());
    }

    @PutMapping("/update/{empId}")
    public ResponseEntity<Employee>update(@PathVariable int empId,@RequestBody Employee employee){
        return ResponseEntity.ok(employeeService.update(empId,employee));
    }

    @DeleteMapping("/deletebyid/{empId}")
    public ResponseEntity<String>deleteByID(@PathVariable int empId){
        employeeService.deleteById(empId);
        return  ResponseEntity.ok("Data Deleted Successfully");
    }
}
