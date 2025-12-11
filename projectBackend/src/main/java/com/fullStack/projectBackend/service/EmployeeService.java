package com.fullStack.projectBackend.service;


import com.fullStack.projectBackend.entity.Employee;
import com.fullStack.projectBackend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;


    public Employee save(Employee employee){
        return  employeeRepository.save(employee);
    }

    public Optional<Employee> findById(int empId){
        return Optional.ofNullable(employeeRepository.findById(empId).orElseThrow(()->new RuntimeException("Employee Id does not exist")));
    }

    public List<Employee>findAll(){
        return employeeRepository.findAll();
    }

    public Employee update(int empId,Employee employee){
        Employee employee1=findById(empId).get();
        employee1.setEmpName(employee.getEmpName());
        employee1.setEmpAddress(employee.getEmpAddress());
        employee1.setEmpSalary(employee.getEmpSalary());

        return employeeRepository.save(employee1);
    }


    public void deleteById(int empId){
        employeeRepository.deleteById(empId);
    }
}
