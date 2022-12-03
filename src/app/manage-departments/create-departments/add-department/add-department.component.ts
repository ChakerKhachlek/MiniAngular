import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DepartmentServiceService } from 'app/core/services/departments/department-service.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit {

  constructor(private fb:FormBuilder, private departmentService: DepartmentServiceService) { }

  ngOnInit(): void {
  }

}
