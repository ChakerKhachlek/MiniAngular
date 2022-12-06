import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contrat } from 'app/core/models/contrat';
import { ContratServiceService } from 'app/core/services/contrats/contrat-service.service';
@Component({
  selector: 'app-update-contrat',
  templateUrl: './update-contrat.component.html',
  styleUrls: ['./update-contrat.component.scss']
})
export class UpdateContratComponent {
  
  constructor(public dialogRef: MatDialogRef<UpdateContratComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Contrat,private fb:FormBuilder) {
  }
  onNoClick(): void {
   // console.log('before closing pop-up',this.data);
    this.dialogRef.close();
  }


  reactiveForm = this.fb.group({
    archive: ['', [Validators.required]],
    montant: ['', [Validators.required]],
    specialite: ['', [Validators.required]],
    dateDebutContrat: ['', [Validators.required]],
    dateFinContrat: ['', [Validators.required]],
  });

}