import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Etudiant } from 'app/core/models/etudiant';
import { EtudiantServiceService } from 'app/core/services/etudiants/etudiant-service.service';

@Component({
  selector: 'app-create-etudiant',
  templateUrl: './create-etudiant.component.html',
  styleUrls: ['./create-etudiant.component.scss'],
  providers:[EtudiantServiceService]
})
export class CreateEtudiantComponent {

  constructor(private fb:FormBuilder, private etudiantService: EtudiantServiceService){}
  @Input() listEtudiants:Etudiant[] ;
 
  reactiveForm = this.fb.group({
    nom:['', [Validators.required, Validators.minLength(3)]],
    prenom: ['', [Validators.required, Validators.minLength(3)]],
    option: ['', [Validators.required]],
  });

  addEtudiant(){
    let etudiant=new Etudiant();
    if(this.reactiveForm.valid){
      etudiant.nom = this.reactiveForm.get('nom').value;
      etudiant.prenom = this.reactiveForm.get('prenom').value;
      etudiant.option = this.reactiveForm.get('option').value;
     
  
      this.etudiantService.addEtudiant(etudiant).subscribe(etudiant => this.listEtudiants.push(etudiant as Etudiant));
      
    }
     
    
  }

}
