import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contrat } from 'app/core/models/contrat';
import { ContratServiceService } from 'app/core/services/contrats/contrat-service.service';
import { NotificationServiceService } from 'app/core/services/notification-service.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-add-contrat',
  templateUrl: './add-contrat.component.html',
  styleUrls: ['./add-contrat.component.scss']
})
export class AddContratComponent {
  create!: boolean;
  @Output() createModeEvent = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder, private ContratService: ContratServiceService,private notification :NotificationServiceService) { }
  @Input() listContrats: Contrat[];

  reactiveForm = this.fb.group({
    archive: ['', [Validators.required]],
    montant: ['', [Validators.required]],
    specialite: ['', [Validators.required]],
    dateDebutContrat: ['', [Validators.required]],
    dateFinContrat: ['', [Validators.required]],
  });


  dateLessThan(from: Date, to: Date) {
    return (from > to)
  }

  addContrat() {
    let contrat = new Contrat();
    if (this.reactiveForm.valid) {
      contrat.archive = Boolean(this.reactiveForm.get('archive').value);
      contrat.montantContrat = Number(this.reactiveForm.get('montant').value);
      contrat.specialite = this.reactiveForm.get('specialite').value;
      contrat.dateDebutContrat = new Date(this.reactiveForm.get('dateDebutContrat').value);
      contrat.dateFinContrat = new Date(this.reactiveForm.get('dateFinContrat').value);

      this.ContratService.addContrat(contrat).subscribe(contrat => {
        this.listContrats.push(contrat as Contrat);
        this.createModeEvent.emit(false);
         this.notification.showNotification('top','right','Contrat added !','success');  
          },error => this.notification.showNotification('top','right','Server Error, contrat is not added !','danger'))
                
         
        

    }


  }
  onNoClick() {
    this.createModeEvent.emit(false)
  }
  

}
