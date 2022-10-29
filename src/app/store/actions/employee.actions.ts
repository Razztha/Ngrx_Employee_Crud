import { createAction, props } from "@ngrx/store";
import { Employee } from "src/app/models/employee";

export const getEmployees = createAction("[Employee] Get Employees");

export const getEmployeesSuccess = createAction("[Employee] Get Employees Success", (employees: ReadonlyArray<Employee>) => ({employees}));

export const addMovie = createAction("[Employee] Add Movie", (employee: Employee) => employee);

export const addMovieSuccess = createAction("[Employee] Add Movie", (employee: Employee) => employee);