package com.example.demo_springboot.DTO.Mapper;


import com.example.demo_springboot.DTO.Request.EmployeeRequest;
import com.example.demo_springboot.DTO.Response.EmployeeResponse;
import com.example.demo_springboot.Entity.EmployeeEntity;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface EmployeeMapper {
    EmployeeMapper MAPPER = Mappers.getMapper(EmployeeMapper.class);
    EmployeeEntity fromRequestToEntity(EmployeeRequest employeeRequest);
    EmployeeResponse fromEntityToResponse(EmployeeEntity employeeEntity);
}