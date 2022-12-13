import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Etudiant } from 'app/core/models/etudiant';
import { EtudiantServiceService } from 'app/core/services/etudiants/etudiant-service.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { NotificationServiceService } from 'app/core/services/notification-service.service';

@Component({
  selector: 'app-create-etudiant',
  templateUrl: './create-etudiant.component.html',
  styleUrls: ['./create-etudiant.component.scss'],
  providers:[EtudiantServiceService]
})
export class CreateEtudiantComponent {

  constructor(private etudiantService: EtudiantServiceService,private notification :NotificationServiceService,
    private matSnackBar: MatSnackBar){}
  @Input() listEtudiants:Etudiant[] ;
  @Input() etudiants:Etudiant[] ;
    etudiant:Etudiant=new Etudiant();
    @Output() requested = new EventEmitter<Etudiant>();

  addEtudiant(){
    let newEtudiant=new Etudiant();
  
      newEtudiant.nom = this.etudiant.nom ;
      newEtudiant.prenom = this.etudiant.prenom ;
      newEtudiant.email = this.etudiant.email ;
      newEtudiant.option = this.etudiant.option ;
     

      this.etudiantService.addEtudiant(newEtudiant).subscribe(etudiant=> {
        this.listEtudiants.push(etudiant as Etudiant);
        this.etudiants.push(etudiant as Etudiant);
        this.requested.emit(newEtudiant);
        this.etudiant=new Etudiant();
        this.notification.showNotification('top','right','Etudiant added !','success');
      } );
      
    
     
    
  }
  
}
