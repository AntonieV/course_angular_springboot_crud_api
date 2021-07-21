import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";
import {EmployeeshareService} from "../employeeshare.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] | undefined;

  constructor(private employeeshareService: EmployeeshareService) { }

  ngOnInit(): void {
    this.getEmployees();

    // data for testing:
    // this.employees = [{
    //   'id': 9,
    //   "firstName": 'Darth',
    //   'lastName': 'Vader',
    //   'emailId': 'd.vader@deathstar.io'
    // },
    // {
    //   'id': 10,
    //   "firstName": 'Luke',
    //   'lastName': 'Skywalker',
    //   'emailId': 'l.skywalker@tatooine.ti'
    // }];
  }

  private getEmployees() { // it is Observable -> it is possible to subscribe to handle the response of the REST API
    this.employeeshareService.getEmployeesList()
      .subscribe(data => {
        this.employees = data;
      });
  }

}
