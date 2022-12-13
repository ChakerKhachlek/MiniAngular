import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from 'app/core/models/etudiant';
import { EtudiantServiceService } from 'app/core/services/etudiants/etudiant-service.service';
import { NotificationServiceService } from 'app/core/services/notification-service.service';

@Component({
  selector: 'app-manage-etudiants',
  templateUrl: './manage-etudiants.component.html',
  styleUrls: ['./manage-etudiants.component.scss']
})
export class ManageEtudiantsComponent {

  createMode : boolean ;
  updateMode : boolean ;

   listEtudiants:Etudiant[] ;
   etudiants:Etudiant[];
  selectedEtudiant: Etudiant;

  constructor( private route:Router,private etudiantService : EtudiantServiceService,private notification : NotificationServiceService){
   this.listEtudiants=[];
  }
  
  displayStyle = "none";

  emailMessage :string ="";
  searchTerm = '';
  selectedId:Number;
  btnDisplay:boolean=false;
  ngOnInit(): void {
    this.getEtudiants();
    this.createMode=true;
    this.updateMode=false;
  }

  getEtudiants(){
    this.etudiantService.getAllEtudiants().subscribe(data => {
      this.listEtudiants= data;
      this.etudiants=this.listEtudiants;
      console.log(data);
      
    });
    
   }

   removeEtudiant(etudiant:Etudiant){
    this.etudiantService.deleteEtudiant(etudiant.id).subscribe(function(etudiant,data) {
      console.log(data);
      this.removeElementFromArray(etudiant);
      this.getEtudiants();
      this.searchTerm='';
      this.notification.showNotification('top','right','Etudiant deleted !','danger');
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
      this.getEtudiants();
      this.searchTerm='';
    }

   goToAdmin() {
    this.route.navigate(['dashboard']);
    }

    openPopup(id:Number) {
      this.emailMessage="";
      this.selectedId=id;
      this.displayStyle = "block";
      
     
    }

    etudiantAdded($event){
      this.getEtudiants();
      this.searchTerm='';
    }

    sendEmail(){
      console.log(this.emailMessage);
      this.btnDisplay=true;
      this.etudiantService.sendEmailToEtudiant(this.selectedId,this.emailMessage).subscribe(response=> {
        
        this.closePopup();
        this.notification.showNotification('top','right','Email sent !','success');
      } );
    }
    closePopup() {
      this.displayStyle = "none";
      this.btnDisplay=false;
    }

    search(value: string): void {
      this.etudiants = this.listEtudiants.filter((val) =>
        val.nom.toLowerCase().includes(value)
      );
    }
}
