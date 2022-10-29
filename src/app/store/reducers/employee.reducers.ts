import { createReducer, on } from "@ngrx/store";
import { Employee } from "src/app/models/employee";
import { getEmployees, getEmployeesSuccess } from "../actions/employee.actions";

export interface EmployeeState{
    employees: ReadonlyArray<Employee>
}

export const initialState : ReadonlyArray<Employee> = [];

export const employeeReducer = createReducer(initialState, 
    on(getEmployeesSuccess, (state, {employees}) => [...employees])
    );

function mockData(){
    const employee1 = new Employee(1, "ras1", "address1");
    const employee2 = new Employee(2, "ras2", "address2");
    const employee3 = new Employee(3, "ras3", "address3");
    var employees = [employee1, employee2, employee3];
    return employees;
}