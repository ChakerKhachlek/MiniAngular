import { Component, OnInit } from '@angular/core';
import { Department } from 'app/core/models/department';
import { DepartmentServiceService } from 'app/core/services/departments/department-service.service';
import { Router } from 'express';

@Component({
  selector: 'app-manage-departments',
  templateUrl: './manage-departments.component.html',
  styleUrls: ['./manage-departments.component.scss']
})
export class ManageDepartmentsComponent implements OnInit {
  listDepartments:Department[] = [];
  createMode : boolean ;
  updateMode : boolean ;

   listdepartment:Department[] ;
 selectedDepartment: Department;

  

  constructor(private departmentService : DepartmentServiceService) { 
    
  }

  ngOnInit(): void {
    this.getDepartments();
    this.createMode=true;
   // this.updateMode=false;
   this.listDepartments=[];
  }

  getDepartments(){
    this.departmentService.getAllDepartments().subscribe(data => {
      this.listDepartments= data;
      console.log(data);
      
    });
  
}
deleteDepartment(dep:Department){
  this.departmentService.deleteDepartment(dep.idDepart).subscribe(function(dep,data) {
    console.log(data);
    this.removeElementFromArray(dep);
    }.bind(this,dep));
  
 }
 removeElementFromArray(element: Department) {
  this.listDepartments.forEach((value,index)=>{
      if(value==element) this.listDepartments.splice(index,1);
  });}

  updateModeActive(departement :Department){
    this.selectedDepartment=departement;
    this.createMode=false;
    this.updateMode=true;
   
  }
  
  departmentUpdated(departement :Department){
    this.updateMode=false;
    this.createMode=true;
  
  }
}


