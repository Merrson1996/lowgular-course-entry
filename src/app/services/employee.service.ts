import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PersonModel } from '../model/person.model';
import { ApiResponse } from './api.response';
import { EmployeeResponse } from './employee.response';
import { CreateEmployeeModel } from '../model/create-employee.model';

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<PersonModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>>
      ('https://dummy.restapiexample.com/api/v1/employees'
      ).pipe(
        map((response: ApiResponse<EmployeeResponse[]>): PersonModel[] => {
          return response.data.map((employeeResponse: EmployeeResponse) => {
            return {
              personalNumber: employeeResponse.id,
              name: employeeResponse.employee_name,
              age: employeeResponse.employee_age,
              salary: employeeResponse.employee_salary,
              image: employeeResponse.profile_image,
              mail: employeeResponse.employee_name + '@lowgular.io'
            }
          });
        }));
  }


  create(employee: CreateEmployeeModel): Observable<any> {
    return this._httpClient.post("https://dummy.restapiexample.com/api/v1/create", employee)
      .pipe(map(_ => void 0));
  }
  delete(id: string): Observable<void> {
    return this._httpClient.delete('https://dummy.restapiexample.com/api/v1/delete/2' + id)
      .pipe(map(_ => void 0))
  }

  getOne(id: string): Observable<PersonModel> {
    return this._httpClient.get<ApiResponse<EmployeeResponse>>('https://dummy.restapiexample.com/api/v1/employee/'+id ).pipe(
     map((response:ApiResponse<EmployeeResponse>):PersonModel => ({
    name:response.data.employee_name,
        personalNumber:response.data.id,
        age: response.data.employee_age,
        salary: response.data.employee_salary,
        image: response.data.profile_image,
        mail: response.data.employee_name + '@lowgular.io'
      }))
    );

  }
}


