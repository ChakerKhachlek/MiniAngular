import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Etudiant } from 'app/core/models/etudiant';
import { EtudiantServiceService } from 'app/core/services/etudiants/etudiant-service.service';

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.scss']
})
export class UpdateEtudiantComponent implements OnInit{

  @Input() listEtudiants:Etudiant[] ;
  @Input() selectedEtudiant:Etudiant ;
  @Input()  createMode : boolean;
  @Input()  updateMode : boolean;

  constructor(private fb:FormBuilder, private etudiantService: EtudiantServiceService){}
 

 
  reactiveForm = this.fb.group({
    nom:['', [Validators.required, Validators.minLength(3)]],
    prenom: ['', [Validators.required, Validators.minLength(3)]],
    option: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.reactiveForm.get('nom').setValue(this.selectedEtudiant.nom);
    this.reactiveForm.get('prenom').setValue(this.selectedEtudiant.prenom);
    this.reactiveForm.get('option').setValue(this.selectedEtudiant.option);
  }

  updateEtudiant(){
    if(this.reactiveForm.valid){
      let newEtudiant=new Etudiant();
 
      newEtudiant.nom = this.reactiveForm.get('nom').value;
      newEtudiant.prenom = this.reactiveForm.get('prenom').value;
      newEtudiant.option = this.reactiveForm.get('option').value;
  
      newEtudiant.id=this.selectedEtudiant.id;
  
      this.etudiantService.updateEtudiant(newEtudiant).subscribe(function(selectedEtudiant,newEtudiant) {
        console.log(this.selectedEtudiant,newEtudiant);
        this.updateElementFromArray(selectedEtudiant,newEtudiant as Etudiant);
        this.updateMode=false;
        this.createMode=true;
        console.log(this.updateMode,this.createMode);
      }.bind(this,this.selectedEtudiant) );
      
    }
    
 
  }
  updateElementFromArray(element: Etudiant,newElement : Etudiant) {
    this.listEtudiants.forEach((value,index)=>{
        if(value==element) this.listEtudiants[index]=newElement;
    });
}
}
