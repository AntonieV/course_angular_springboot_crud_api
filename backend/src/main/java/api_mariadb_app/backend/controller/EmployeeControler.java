package api_mariadb_app.backend.controller;

import api_mariadb_app.backend.model.Employee;
import api_mariadb_app.backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1") // defines a standard url over here, this a typically endpoint of a rest api
public class EmployeeControler {

    @Autowired // to inject this repository by spring container
    private EmployeeRepository employeeRepository;

    // get all employees
    @GetMapping("/employees") // on call url "/api/v1" in brwoser the api will return a list of emloyees
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }
}
