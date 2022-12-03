import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from 'app/core/models/etudiant';
import { EtudiantServiceService } from 'app/core/services/etudiants/etudiant-service.service';
import { data } from 'jquery';

@Component({
  selector: 'app-manage-etudiants',
  templateUrl: './manage-etudiants.component.html',
  styleUrls: ['./manage-etudiants.component.scss']
})
export class ManageEtudiantsComponent {

  createMode : boolean ;
  updateMode : boolean ;

   listEtudiants:Etudiant[] ;
  selectedEtudiant: Etudiant;

  constructor( private route:Router,private etudiantService : EtudiantServiceService){
   this.listEtudiants=[];
  }
  ngOnInit(): void {
    this.getEtudiants();
    this.createMode=true;
    this.updateMode=false;
  }

  getEtudiants(){
    this.etudiantService.getAllEquipes().subscribe(data => {
      this.listEtudiants= data;
      console.log(data);
      
    });
    
   }

   removeEtudiant(etudiant:Etudiant){
    this.etudiantService.deleteEtudiant(etudiant.id).subscribe(function(etudiant,data) {
      console.log(data);
      this.removeElementFromArray(etudiant);
      }.bind(this,etudiant));
    
   }

  removeElementFromArray(element: Etudiant) {
    this.listEtudiants.forEach((value,index)=>{
        if(value==element) this.listEtudiants.splice(index,1);
    });
}

    updateModeActive(etudiant :Etudiant){
      this.selectedEtudiant=etudiant;
      this.createMode=false;
      this.updateMode=true;
     
    }
    
    etudiantUpdated(etudiant :Etudiant){
      this.updateMode=false;
      this.createMode=true;
    
    }

   goToAdmin() {
    this.route.navigate(['dashboard']);
    }
}
