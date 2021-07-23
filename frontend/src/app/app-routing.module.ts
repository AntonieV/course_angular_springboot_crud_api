import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {EmployeeListComponent} from "./employee-list/employee-list.component";

const routes: Routes = [
  {path: "employees", component: EmployeeListComponent},
  {path: '', redirectTo: 'employees', pathMatch: 'full'} // redirects the empty path to /employees, it is recommended to use full pathMatch strategy when defining empty path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
