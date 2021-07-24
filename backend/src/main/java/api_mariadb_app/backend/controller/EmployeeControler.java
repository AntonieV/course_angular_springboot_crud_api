package api_mariadb_app.backend.controller;

import api_mariadb_app.backend.model.Employee;
import api_mariadb_app.backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1") // defines a standard url over here, this a typically endpoint of a rest api
public class EmployeeControler {

    @Autowired // to inject this repository by spring container
    private EmployeeRepository employeeRepository;

    // GET-Request: get all employees
    @GetMapping("/employees") // on call url "/api/v1/employees" in brwoser the api will return a list of emloyees
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    // POST-Request: create employee REST API
    @PostMapping("/employees")  // to create a REST API endpoint
    public Employee createEmployee(@RequestBody Employee employee) { // @RequestBody directly connect to the body of the POST request
        return employeeRepository.save(employee);
    }
}
