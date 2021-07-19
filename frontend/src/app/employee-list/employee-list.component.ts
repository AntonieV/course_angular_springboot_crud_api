import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor() { }

  ngOnInit(): void {
    this.employees = [{
      'id': 9,
      "firstName": 'Darth',
      'lastName': 'Vader',
      'emailId': 'd.vader@deathstar.io'
    },
    {
      'id': 10,
      "firstName": 'Luke',
      'lastName': 'Skywalker',
      'emailId': 'l.skywalker@tatooine.ti'
    }];
  }

}
