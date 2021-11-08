import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";
import {ActivatedRoute} from "@angular/router";
import {EmployeeshareService} from "../employeeshare.service";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  // use activated Route to get the id from the Route
  id: number;
  employee: Employee;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeshareService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employee = new Employee();
    // this method returns an Observable -> subscribe to service and assign the response of the REST API to the employee object
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
      console.log(data)
    });
  }
}
