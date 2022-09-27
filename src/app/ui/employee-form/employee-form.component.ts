import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  readonly employeeform: FormGroup = new FormGroup({
    name: new FormControl(null,[Validators.required ]),
    age: new FormControl(null,[Validators.min(0) ,Validators.required]),
    salary: new FormControl(null,[Validators.min(0),Validators.required])
  });
}
