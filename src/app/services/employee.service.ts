import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PersonModel } from '../model/person.model';
import { CreateEmployeeModel } from '../model/create-employee.model';
import {ApiResponse} from "./api.response";
import {EmployeeResponse} from "./employee.response";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getaLL(): Observable<PersonModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>>('https://dummy.restapiexample.com/api/v1/employees',
      ).pipe(
        map((response:ApiResponse<EmployeeResponse[]>):PersonModel[] => {
          return response.data.map((employeeResponse: EmployeeResponse) =>{
            return{
              name: employeeResponse.employee_name,
              personalNumber:employeeResponse. id,
              mail: employeeResponse. employee_name + "lowgular.io",
              img: employeeResponse.profile_image
            }
          })
        })
    )
  }

  create(employee: CreateEmployeeModel): Observable<any> {
    return this._httpClient.post("https://dummy.restapiexample.com/api/v1/create", employee);
  }

  delete(id: string): Observable<void> {
    return this._httpClient.delete("https://dummy.restapiexample.com/api/v1/delete/2" +id).pipe(map(_ => void 0));

  }
}

