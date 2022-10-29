import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, exhaustMap, map } from "rxjs";
import { EmployeeService } from "src/app/services/employee.service";
import { getEmployees, getEmployeesSuccess } from "../actions/employee.actions";

@Injectable()
export class EmployeeEffects{

    loadMovie$ = createEffect(() =>
    this.action$.pipe(
      ofType(getEmployees),
      exhaustMap(() =>
        this.employeeService.getEmployees().pipe(
          map((movies) => getEmployeesSuccess(movies)),
          catchError(() => EMPTY)
        )
      )
    )
    );

    constructor(private action$: Actions, private employeeService: EmployeeService){}
}