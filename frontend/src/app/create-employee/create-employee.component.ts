import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";
import {EmployeeshareService} from "../employeeshare.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private employeeshareSerivce: EmployeeshareService,
              private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee() {
    this.employeeshareSerivce.createEmployee(this.employee)
      .subscribe(data => {
        console.log(data);
        this.goToEmployeeList();
        },
        error => console.log(error));
  }

  // to navigate to the corresponding path / to employee list page
  goToEmployeeList() {
    this.router.navigate(['/employees'])
  }

  onSubmit() {  // event-handler for ngSubmit of the form from html-template
    console.log(this.employee);
    this.saveEmployee();
  }

}
