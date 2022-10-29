import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { StoreModule } from '@ngrx/store';
import { employeeReducer } from './store/reducers/employee.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { max } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffects } from './store/effects/employee.effects';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({employees: employeeReducer}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([EmployeeEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
