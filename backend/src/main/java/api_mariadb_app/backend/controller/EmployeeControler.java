package api_mariadb_app.backend.controller;

import api_mariadb_app.backend.exception.ResourceNotFoundException;
import api_mariadb_app.backend.model.Employee;
import api_mariadb_app.backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

    // get employee by id REST API
    @GetMapping("/employees/{id}") // id from url must be mapped to Long id param in getEmployeeById() function
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
        // using the employee repository. FindById returns an Optional Type, so orElseThrow is needed, if there is not an existing database
        // the orElseThrow methode uses functional interfaces, so a lambda expression is needed there, so implement a functional interface
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id:" + id));
        // return type of the http call is a ResponseEntity class, if response type is ok, it returns employee object in the body
        return ResponseEntity.ok(employee);
    }

    // update employee REST API
    @PutMapping("/employees/{id}")
    // directly maps a request json object to a java object with @RequestBody annotation
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee changedEmployee) {
        // to update an employee the employee object first must be retrieved from the database as the same way as in get employee by id method
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id:" + id));
        // update the employee object from database
        employee.setFirstName(changedEmployee.getFirstName());
        employee.setLastName(changedEmployee.getLastName());
        employee.setEmailId(changedEmployee.getEmailId());
        // save the updated object to the database and return the saved object to the client in the body
        Employee updatedEmployee = employeeRepository.save(employee);
        return ResponseEntity.ok(updatedEmployee);
    }
}
