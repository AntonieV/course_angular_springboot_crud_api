import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {  // event-handler for ngSubmit of the form from html-template
    console.log(this.employee);
  }

}
