import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from 'app/core/models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentServiceService {

  
  departmentlist: Department[]= [];
  constructor(private http: HttpClient) { }
  url = "http://localhost:8089/kaddem/Departement/";
  listDepartments:Department[] = [];

  getAllDepartments(){
    return this.http.get<Department[]>(this.url+'retrieve-all-departements');
   }
   addDepartment(departement:Department){
    return this.http.post(this.url+'add-Department',departement);
   }
   deleteDepartment(id:Number){
    return this.http.delete(this.url+'remove-department/'+id);
  }
  updateDepartment(departement : Department){
   
      return this.http.put<Department>(this.url+'update-department', departement);
    
  }
   
   
}
