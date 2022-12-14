import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Universite } from 'app/core/models/universite';
import { UniversiteService } from 'app/core/services/universite/universite.service';
import { NotificationServiceService } from 'app/core/services/notification-service.service';


@Component({
  selector: 'app-update-universite',
  templateUrl: './update-universite.component.html',
  styleUrls: ['./update-universite.component.scss']
})
export class UpdateUniversiteComponent implements OnInit{

  @Input() listUniversites : Universite [];
  @Input() selectedUniversite : Universite;
  @Input() createMode : boolean;
  @Input() updateMode : boolean;
  @Output() requested = new EventEmitter<Universite>();

  constructor(
   private fb : FormBuilder,
    private universiteService : UniversiteService,
    private notification : NotificationServiceService
  ){}

  reactiveForm = this.fb.group({
    nomUniversite:['', [Validators.required, Validators.minLength(3)]]
  })

  ngOnInit() {
    this.reactiveForm.get('nomUniversite').setValue(this.selectedUniversite.nomUniv);
  }

  updateUniversite(){
    if (this.reactiveForm.valid){
      let newUniversite = new Universite();

      newUniversite.nomUniv = this.reactiveForm.get('nomUniversite').value;
      newUniversite.idUniv = this.selectedUniversite.idUniv;

      this.universiteService.updateUniversite(newUniversite).subscribe(function(selectedUniversite,newUniversite){
        console.log(this.selectedUniversite, newUniversite);
        this.updateElementFromArray(selectedUniversite, newUniversite as Universite);

        this.requested.emit(newUniversite);
        this.notification.showNotification('top', 'right', 'Université mise à jour !', 'warning');
        console.log(this.updateMode, this.createMode);
      }.bind(this, this.selectedUniversite))
    }
  }
  updateElementfromArray(element:Universite, newElement:Universite){
    this.listUniversites.forEach((value,index) => {
      if (value == element)
        this.listUniversites[index] = newElement
    })
  }

}
