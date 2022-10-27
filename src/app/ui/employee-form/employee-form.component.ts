import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import {CreateEmployeeModel} from "../../model/create-employee.model";

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    Name: new FormControl(null,[Validators.required]),
    Age: new FormControl(null, [Validators.min(18),Validators.max(120), Validators.required]),
    Salary: new FormControl(null,[Validators.required]),
  });

  constructor(private _employeeService: EmployeeService) {
  }

  OnFormSubmitted(form:CreateEmployeeModel){
    this._employeeService.create(form).subscribe({
      complete() {alert("User was successfully added to database" +form.name +form.age +form.salary )
      }
      }
  )}

}
