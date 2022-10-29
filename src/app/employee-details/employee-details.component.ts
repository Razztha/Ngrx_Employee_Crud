import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee : Employee | undefined;
  public selectedId : any;
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get("id");
      this.selectedId = id;
    })
    
    this.employeeService.getEmployeeById(this.selectedId).subscribe((data) => {
      console.log(data);
      this.employee= data
    },
    (error) => console.log(error));
  }

}
