import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Contrat } from 'app/core/models/contrat';
import { ContratServiceService } from 'app/core/services/contrats/contrat-service.service';

@Component({
  selector: 'app-add-contrat',
  templateUrl: './add-contrat.component.html',
  styleUrls: ['./add-contrat.component.scss']
})
export class AddContratComponent {
  constructor(private fb:FormBuilder, private ContratService: ContratServiceService){}
  @Input() listContrats:Contrat[] ;
 
  reactiveForm = this.fb.group({
    archive: ['', [Validators.required]],
    montant: ['', [Validators.required]],
    specialite: ['', [Validators.required]],
    dateDebutContrat: ['', [Validators.required]],
    dateFinContrat: ['', [Validators.required]],
  });

  addContrat(){
   let contrat=new Contrat();
    if(this.reactiveForm.valid){
      /*contrat.nom = this.reactiveForm.get('nom').value;
      contrat.prenom = this.reactiveForm.get('prenom').value;
      contrat.option = this.reactiveForm.get('option').value;*/
     
  
      this.ContratService.addContrat(contrat).subscribe(Contrat => this.listContrats.push(Contrat as Contrat));
      
    }
     
    
  }

}
