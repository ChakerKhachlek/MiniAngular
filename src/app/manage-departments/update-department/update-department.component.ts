import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Department } from 'app/core/models/department';
import { DepartmentServiceService } from 'app/core/services/departments/department-service.service';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.scss']
})
export class UpdateDepartmentComponent implements OnInit {

 

  @Input() listDepartments:Department[];
  @Input() selectedDepartment:Department;
  @Input()  createMode : boolean;
  @Input()  updateMode : boolean;
  @Output() requested = new EventEmitter<Department>();

  constructor(private fb:FormBuilder ,private departmentService : DepartmentServiceService) { }
  
  reactiveForm=this.fb.group({
    nomDep:['', [Validators.required, Validators.minLength(3)]],
  });

  ngOnInit(): void {
    this.reactiveForm.get('nomDep').setValue(this.selectedDepartment.nomDepart);

    
  }
  updateDepartment(){
    if(this.reactiveForm.valid){
      let newDepart=new Department();
 
      newDepart.nomDepart= this.reactiveForm.get('nomDep').value;
   
      newDepart.idDepart=this.selectedDepartment.idDepart;
  
      this.departmentService.updateDepartment(newDepart).subscribe(function(selectedDepartment,newDepart) {
        console.log(this.selectedEtudiant,newDepart);
        this.updateElementFromArray(selectedDepartment,newDepart as Department);
      
        this.requested.emit(newDepart);
        console.log(this.updateMode,this.createMode);
      }.bind(this,this.selectedDepartment) );
      
    }
    
    
 
  }
  updateElementFromArray(element: Department,newElement : Department) {
    this.listDepartments.forEach((value,index)=>{
        if(value==element) this.listDepartments[index]=newElement;
    });

}}
