package com.example.demo_springboot.Service;


import com.example.demo_springboot.DTO.Mapper.EmployeeMapper;
import com.example.demo_springboot.DTO.Request.EmployeeRequest;
import com.example.demo_springboot.DTO.Response.EmployeeResponse;
import com.example.demo_springboot.Entity.EmployeeEntity;
import com.example.demo_springboot.Repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    public EmployeeRepository employeeRepository;

    /*public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }*/

    @Override
    public List<EmployeeEntity> findAllEmployee() {
        return employeeRepository.findAll();
    }

    @Override
    public Optional<EmployeeEntity> findById(Long id) {
        return employeeRepository.findById(id);
    }

    @Override
    public EmployeeEntity saveEmployee(EmployeeEntity employeeEntity) {
        return employeeRepository.save(employeeEntity);
    }

    @Override
    public EmployeeEntity updateEmployee(EmployeeEntity employeeEntity) {
        return employeeRepository.save(employeeEntity);
    }

    @Override
    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }

//    Using Request and Response with save and update employee

    @Override
    public EmployeeResponse saveEmployee(EmployeeRequest employeeRequest) {
        EmployeeEntity employeeEntity = EmployeeMapper.MAPPER.fromRequestToEntity(employeeRequest);
        employeeRepository.save(employeeEntity);
        return EmployeeMapper.MAPPER.fromEntityToResponse(employeeEntity);
    }

    @Override
    public EmployeeResponse updateEmployee(EmployeeRequest employeeRequest, Long id) {

        Optional<EmployeeEntity> checkExistingEmployee = findById(id);
        if (! checkExistingEmployee.isPresent())
            throw new RuntimeException("Employee Id "+ id + " Not Found!");

        EmployeeEntity employeeEntity = EmployeeMapper.MAPPER.fromRequestToEntity(employeeRequest);
        employeeEntity.setId(id);
        employeeRepository.save(employeeEntity);
        return EmployeeMapper.MAPPER.fromEntityToResponse(employeeEntity);
    }

}