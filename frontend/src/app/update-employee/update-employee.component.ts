import {Component, OnInit} from '@angular/core';
import {Employee} from "../employee";
import {EmployeeshareService} from "../employeeshare.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number | undefined;
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeshareService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    // the corresponding id must be retrieved from route with a snapshot form ActivatedRoute
    this.id = this.route.snapshot.params['id']; // to get id value
    // to fill up input fields with data of the corresponding employee, retrive this data with a REST call on getEmployeeById()
    // subscribe to the methode because the service returns an observable
    if (this.id !== undefined) {
      this.employeeService.getEmployeeById(this.id).subscribe(data => {
        this.employee = data;
      }, error => console.log(error));
    }
  }

  onSubmit() {
    if (this.id !== undefined) {
      this.employeeService.updateEmployee(this.id, this.employee).subscribe( data => {
        this.goToEmployeeList();
      }, error => console.log(error));
    }
  }

  // to navigate to the corresponding path / to employee list page
  goToEmployeeList() {
    this.router.navigate(['/employees'])
  }

}
