import { Component } from '@angular/core';
import { Contrat } from 'app/core/models/contrat';
import { ContratServiceService } from 'app/core/services/contrats/contrat-service.service';
import { Router } from '@angular/router';
import { UpdateContratComponent } from '../update-contrat/update-contrat.component';
import { MatDialog } from '@angular/material/dialog';
import { data } from 'jquery';
import { NotificationServiceService } from 'app/core/services/notification-service.service';

@Component({
  selector: 'app-list-contrats',
  templateUrl: './list-contrats.component.html',
  styleUrls: ['./list-contrats.component.scss']
})
export class ListContratsComponent {
  searchArchive:string='';
  createMode: boolean;
  listContrats: Contrat[] = [];
  listContrats1 :Contrat[]=[];
  contrat: Contrat;
  constructor(private route: Router, private contratService: ContratServiceService, public dialog: MatDialog, private notification: NotificationServiceService) {

  }
  ngOnInit(): void {
    this.getContrats();
  }

  getContrats() {
    this.contratService.getAllContrats().subscribe(data => {
      this.listContrats = data;
      console.log(data);
      this.listContrats1=this.listContrats;
      console.log(this.listContrats1);


    });
  }

  updateContrat(contrat: Contrat) {
    let dialogRef = this.dialog.open(UpdateContratComponent, {
      height: '590px',
      width: '600px',
      data: structuredClone(contrat)
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.contratService.updateContrat(result).subscribe(updatedContrat => {
          console.log(updatedContrat);
          this.listContrats.forEach((value, index) => {
            if (value.idContrat === updatedContrat.idContrat)
              this.listContrats[index] = updatedContrat;
          });
          this.notification.showNotification('top', 'right', 'contract updated !', 'success');
        }, error => this.notification.showNotification('top', 'right', 'Server Error, contract is not updated !', 'danger'));
      } console.log('The dialog was closed', result);
      console.log('The dialog was closed', this.listContrats);
    });
  }
  removeContrat(idContrat: number) {
    this.contratService.deleteContrat(idContrat).subscribe(data => {
      console.log("Le contrat est supprimé");
      this.notification.showNotification('top', 'right', 'contract deleted !', 'success');
      this.listContrats.forEach((value,index)=>{
        if(value.idContrat==idContrat) this.listContrats.splice(index,1);
    });
    })
  }
  toggleCreatEtudiantForm(toggle: boolean) {
    this.createMode = toggle;
  }
 search(): void {
      if(this.searchArchive!==''){
      this.listContrats1 = this.listContrats.filter((val) =>
        String(val.montantContrat).includes(this.searchArchive) 
      );}else{
        this.listContrats1=this.listContrats;
      }
    }

}

