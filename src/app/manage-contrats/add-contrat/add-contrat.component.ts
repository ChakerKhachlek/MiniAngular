import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contrat } from 'app/core/models/contrat';
import { ContratServiceService } from 'app/core/services/contrats/contrat-service.service';

@Component({
  selector: 'app-add-contrat',
  templateUrl: './add-contrat.component.html',
  styleUrls: ['./add-contrat.component.scss']
})
export class AddContratComponent {
  create!: boolean;
  constructor(private fb:FormBuilder, private ContratService: ContratServiceService){}
  @Input() listContrats:Contrat[] ;
 
  reactiveForm = this.fb.group({
    archive: ['', [Validators.required]],
    montant: ['', [Validators.required]],
    specialite: ['', [Validators.required]],
    dateDebutContrat: ['', [Validators.required]],
    dateFinContrat: ['', [Validators.required]],
  });


  dateLessThan(from: Date, to: Date) {
   return (from>to)
    }

  addContrat(){
   let contrat=new Contrat();
    if(this.reactiveForm.valid){
      contrat.archive= Boolean(this.reactiveForm.get('archive').value);
      contrat.montantContrat=Number(this.reactiveForm.get('montant').value);
      contrat.specialite=this.reactiveForm.get('specialite').value;
      contrat.dateDebutContrat=new Date(this.reactiveForm.get('dateDebutContrat').value);
      contrat.dateFinContrat=new Date(this.reactiveForm.get('dateFinContrat').value);


      this.ContratService.addContrat(contrat).subscribe(contrat => this.listContrats.push(contrat as Contrat));
      window.location.reload();

    }
  
    
  }
  onNoClick(){
    this.create=false;
  }

}
