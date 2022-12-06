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
  //createMode : boolean ;
  //updateMode : boolean ;

   //listdepartment:Department[] ;
 // selectedDepartment: Department;

  

  constructor(private departmentService : DepartmentServiceService) { 
  //  this.listDepartments=[];
  }

  ngOnInit(): void {
    this.getDepartments();
   // this.createMode=false;
   // this.updateMode=false;
  }

  getDepartments(){
    this.departmentService.getAllDepartments().subscribe(data => {
      this.listDepartments= data;
      console.log(data);
      
    });



}}
