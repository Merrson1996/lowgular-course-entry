import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponentModule } from "./ui/employee-list/employee-list.component-module";
import {FacesComponentModule} from "./ui/faces/faces.component-module";
import {EmployeeServiceModule} from "./services/employee.service-module";
import {ProjectListComponentModule} from "./ui/project-list-component/project-list.component-module";
import {ProjectServiceModule} from "./services/project.service-module";
import {EmployeeFormComponentModule} from "./ui/employee-form/employee-form.component-module";
import {EmployeeFormComponent} from "./ui/employee-form/employee-form.component";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeeListComponentModule,
    EmployeeServiceModule,
    FacesComponentModule,
    ProjectListComponentModule,
    ProjectServiceModule,
    EmployeeFormComponentModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
