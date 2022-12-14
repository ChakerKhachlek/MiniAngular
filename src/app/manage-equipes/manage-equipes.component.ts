import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormArray,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DetailsEquipe } from 'app/core/models/detailsEquipe';
import { Equipe } from 'app/core/models/equipe';
import { EquipeService } from 'app/core/services/equipe/equipe.service';
import { NotificationServiceService } from 'app/core/services/notification-service.service';
import jsPDF from 'jspdf';
import "jspdf-autotable";

@Component({
  selector: 'app-manage-equipes',
  templateUrl: './manage-equipes.component.html',
  styleUrls: ['./manage-equipes.component.scss']
})
export class ManageEquipesComponent {
  selectedEquipe:Equipe ;
  searchText;

   listEquipes:Equipe[] = [];
  updateB =false;
  
   constructor(private EquipeS : EquipeService,private fb : FormBuilder,private notification :NotificationServiceService){
    
   }

   reactiveForm = this.fb.group({
    nom:['', [Validators.required, Validators.minLength(3)]],
    niveau: ['',[Validators.required]],
    thematique: ['',[Validators.required, Validators.minLength(3)]],
    salle: ['',[Validators.required, Validators.min(1)]],
    
 
 
    });

    
   ngOnInit(): void {
     this.getlistEquipes();
    
     
   }
 
   getlistEquipes(){
     this.EquipeS.getAllEquipes().subscribe(data => {
       this.listEquipes= data;
       console.log("data :",data);
       console.log("liste :", this.listEquipes);
     });
    
     
    }
    removeElementFromArray(element: Equipe) {
      this.listEquipes.forEach((value,index)=>{
          if(value==element) {
          this.listEquipes.splice(index,1);}
      });
  }

     deleteEquipe(e){

      this.EquipeS.deleteEquipe(e).subscribe(function(e,data) {
        console.log(data);
        this.removeElementFromArray(e);

        this.getlistEquipes();

        this.notification.showNotification('top','right','Equipe supprimé avec succès !','danger');
        }.bind(this,e));
        location.reload;
    
        
    }



    addEquipe(){
      let equipe=new Equipe();
      let equipeD=new DetailsEquipe();

      if(this.reactiveForm.valid){
        equipe.nomEquipe= this.reactiveForm.get('nom').value;
        equipe.niveau = this.reactiveForm.get('niveau').value;
        equipeD.salle =  +this.reactiveForm.get('salle').value;
        equipeD.thematique = this.reactiveForm.get('thematique').value;
        equipe.detailEquipe = equipeD;
       
    
        console.log("XXX",equipeD,equipe);

        this.EquipeS.createEquipe(equipe).subscribe(equipe => this.listEquipes.push(equipe as Equipe));
        this.notification.showNotification('top','right','Equipe ajouté avec succès !','success');
       
    }
  }

  equipeToModify :Equipe;
  n : number;
  r : number;
    pushEquipeForUpdate(eq : Equipe){
      console.log("puched equipe",eq.idEquipe);
      this.updateB= true;
      this.reactiveForm.get('nom').setValue(eq.nomEquipe);
      this.reactiveForm.get('niveau').setValue(eq.niveau);
      this.reactiveForm.get('thematique').setValue(eq.detailEquipe.thematique);
      this.reactiveForm.get('salle').setValue(eq.detailEquipe.salle.toString());

      this.n=eq.idEquipe;
      this.r=eq.detailEquipe.id_detail_equipe;


    }

    backToAdd(){

      this.updateB=false;
      this.reactiveForm.reset();
    }

    updateEquipeAndDetailEquipe(){
      if(this.reactiveForm.valid){
        let newEquipe=new Equipe();
        let newdetaiEquipe= new DetailsEquipe();
        newEquipe.nomEquipe = this.reactiveForm.get('nom').value;
        newEquipe.niveau = this.reactiveForm.get('niveau').value;
        newdetaiEquipe.salle= +this.reactiveForm.get('salle').value;
        newdetaiEquipe.thematique= this.reactiveForm.get('thematique').value;
        newEquipe.idEquipe=this.n;
        newdetaiEquipe.id_detail_equipe=this.r;
    
        this.EquipeS.updateDetailEquipe(newdetaiEquipe).subscribe();
        this.EquipeS.updateEquipe(newEquipe).subscribe();
        this.getlistEquipes;
       /* this.EquipeS.updateEquipe(newEquipe).subscribe(function(e,newEquipe) {

          this.updateElementFromArray(e,newEquipe as Equipe);
        
          this.requested.emit(newEquipe);
          console.log(this.updateMode,this.createMode);
        }.bind(this,this.selectedEquipe) );*/
        
      }
    }



  download() {
    let doc = new jsPDF();
    (doc as any).autoTable({html: '#table'});
    (doc as any).output('datauri','test.pdf');
  }

  }
 





      
