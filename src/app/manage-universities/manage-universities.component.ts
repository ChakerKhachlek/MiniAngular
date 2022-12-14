import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Universite } from 'app/core/models/universite';
import { NotificationServiceService } from 'app/core/services/notification-service.service';
import { UniversiteService } from 'app/core/services/universite/universite.service';


@Component({
  selector: 'app-manage-universities',
  templateUrl: './manage-universities.component.html',
  styleUrls: ['./manage-universities.component.scss']
})
export class ManageUniversitiesComponent {
  createMode : boolean;
  updateMode : boolean;

  listUniversites : Universite[];
  selectedUniversite : Universite;

  constructor(
    private route : Router,
    private universiteService : UniversiteService,
    private notification : NotificationServiceService
  ){this.listUniversites = []}

  ngOnInit() {
    this.getAllUniversites();
    this.createMode = true;
    this.updateMode = false;
  }

  getAllUniversites(){
    this.universiteService.getAllUniversites().subscribe(data => {
      this.listUniversites = data;
      console.log(data);
    })
  }
  removeUniversite(universite: Universite) {
    this.universiteService.deleteUniversite(universite.idUniv).subscribe(function (universite, data) {
      console.log(data);
      this.removeElementFromArray(universite);
      this.notification.showNotification('top', 'right', 'Université deleted !', 'danger');
    }.bind(this, universite))
  }
  removeElementFromArray(element: Universite) {
    this.listUniversites.forEach((value, index) => {
      if (value == element) this.listUniversites.splice(index, 1);
    });
  }

  updateModeActive(universite: Universite) {
    this.selectedUniversite = universite;
    this.createMode = false;
    this.updateMode = true;

  }
  universiteUpdated(universite: Universite) {
    this.updateMode = false;
    this.createMode = true;

  }
  goToAdmin() {
    this.route.navigate(['dashboard']);
  }
}
