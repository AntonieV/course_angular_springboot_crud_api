import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";
import {EmployeeshareService} from "../employeeshare.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] | undefined;

  constructor(private employeeshareService: EmployeeshareService,
              private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() { // it is Observable -> it is possible to subscribe to handle the response of the REST API
    this.employeeshareService.getEmployeesList()
      .subscribe(data => {
        this.employees = data;
      });
  }

  // add a router navigation to route to the update employee page according to path which is defined in app-routing.module.ts
  updateEmployee(id: number | undefined) {
    if (id !== undefined) {
      this.router.navigate(['update-employee', id]);
    }
  }
}
