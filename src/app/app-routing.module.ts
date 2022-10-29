import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'employees'},
  {path: 'employees', component: EmployeeListComponent},
  {path: 'employees/:id', component: EmployeeDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
