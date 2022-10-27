import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {EmployeeService} from "../../services/employee.service";
import {PersonModel} from "../../model/person.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent {
  data:Observable<PersonModel[] | null> = this._employeeService.getAll();
  constructor(private _employeeService:EmployeeService ) {
  }
  remove(id:string){
    this._employeeService.delete(id).subscribe();
  }

}
