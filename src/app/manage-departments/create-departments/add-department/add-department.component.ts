import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Department } from 'app/core/models/department';
import { DepartmentServiceService } from 'app/core/services/departments/department-service.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit {

  constructor(private fb:FormBuilder, private departmentService: DepartmentServiceService) { }
@Input() listDepartment:Department[]; 

reactiveForm= this.fb.group({
  nomDep:['', [Validators.required, Validators.minLength(3)]],
})
addDepartment(){
  let department=new Department();
  if(this.reactiveForm.valid){
    department.nomDepart=this.reactiveForm.get("nomDep").value;
    this.departmentService.addDepartment(department).subscribe(department => this.listDepartment.push(department as Department));
  }
}
  ngOnInit(): void {
  }

}
