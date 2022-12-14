import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Universite } from 'app/core/models/universite';
import { UniversiteService } from 'app/core/services/universite/universite.service';
import { NotificationServiceService } from 'app/core/services/notification-service.service';

@Component({
  selector: 'app-create-universite',
  templateUrl: './create-universite.component.html',
  styleUrls: ['./create-universite.component.scss'],
  providers:[UniversiteService]
})
export class CreateUniversiteComponent {
  constructor(
    private fb:FormBuilder,
    private universiteService:UniversiteService,
    private matSnackBar:MatSnackBar,
    private notification:NotificationServiceService){}
  @Input()
  listUniversites: Universite[];

  reactiveForm = this.fb.group({
    nomUniversite:['', [Validators.required, Validators.minLength(3)]]
  });

  addUniversite(){
    let universite = new Universite();
    if (this.reactiveForm.valid){
      universite.nomUniv = this.reactiveForm.get('nomUniversite').value;

      this.universiteService.addUniversite(universite).subscribe(universite=>{
        this.listUniversites.push(universite as Universite);
        this.notification.showNotification('top','right','Université Créée!','success')
      })
    }
  }

}
