import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  // to fill up input fields with data of the corresponding employee, retrive this data with a REST call on getEmployeeById()

}
