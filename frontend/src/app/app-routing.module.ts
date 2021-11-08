import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {CreateEmployeeComponent} from "./create-employee/create-employee.component";
import {UpdateEmployeeComponent} from "./update-employee/update-employee.component";
import {EmployeeDetailsComponent} from "./employee-details/employee-details.component";

const routes: Routes = [
  {path: "employees", component: EmployeeListComponent},
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path: '', redirectTo: 'employees', pathMatch: 'full'} ,// redirects the empty path to /employees, it is recommended to use full pathMatch strategy when defining empty path
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  {path: 'employee-details/:id', component: EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
