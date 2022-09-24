import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeModel } from '../../model/employee.model';
import {PersonModel} from "../../model/person.model";

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  data$: Observable<PersonModel[] | null> = this._employeeService.getaLL();
  constructor(private _employeeService: EmployeeService) {
  }
}
