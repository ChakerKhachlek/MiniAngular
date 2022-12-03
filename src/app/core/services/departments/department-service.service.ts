import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from 'app/core/models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentServiceService {

  
  departmentlist: Department[]= [];
  constructor(private http: HttpClient) { }
  url = "http://localhost:8089/kaddem/Departement/retrieve-all-departements";

  getAllDepartments(){
    return this.http.get<Department[]>(this.url);
   }

   
   
}
