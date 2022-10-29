import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';
import { getEmployees } from '../store/actions/employee.actions';
import { EmployeeState } from '../store/reducers/employee.reducers';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList! : Employee[];
  employees$ = this.store.select('employees');
  constructor(private employeeService: EmployeeService, private router: Router, private store : Store<EmployeeState>) { }
  ngOnInit(): void {

    this.store.dispatch(getEmployees());
    
    // this.employeeService.getEmployees().subscribe(
    //   (data) => {this.employeeList = data},
    //   (error) => {console.log(error)},
    //   () =>{})
  }

  onClick(id : number){
    this.router.navigate(['/employees', id]);
  }
}
