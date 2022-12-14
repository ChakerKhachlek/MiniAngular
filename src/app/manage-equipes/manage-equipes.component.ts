import { Component, Input } from '@angular/core';
import { FormArray,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DetailsEquipe } from 'app/core/models/detailsEquipe';
import { Equipe } from 'app/core/models/equipe';
import { EquipeService } from 'app/core/services/equipe/equipe.service';
import { NotificationServiceService } from 'app/core/services/notification-service.service';

@Component({
  selector: 'app-manage-equipes',
  templateUrl: './manage-equipes.component.html',
  styleUrls: ['./manage-equipes.component.scss']
})
export class ManageEquipesComponent {
  selectedEquipe:Equipe ;

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
        
        this.notification.showNotification('top','right','Equipe supprimé avec succès !','danger');
        }.bind(this,e));
    
        
    //   this.EquipeS.deleteEquipe(e).subscribe(data =>{
    //     this.removeElementFromArray(e);
      
    //   this.notification.showNotification('top','right','Equipe supprimé avec succès !','success');

    // }.bind(this,e));
  
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

    pushEquipeForUpdate(e : Equipe){
      this.updateB= true;
      this.reactiveForm.get('nom').setValue(e.nomEquipe);
      this.reactiveForm.get('niveau').setValue(e.niveau);
      this.reactiveForm.get('thematique').setValue(e.detailEquipe.thematique);
      this.reactiveForm.get('salle').setValue(e.detailEquipe.salle.toString());

    }

    backToAdd(){

      this.updateB=false;
      this.reactiveForm.reset();
    }

    updateEquipe(e :any){
      if(this.reactiveForm.valid){
        console.log(e);
        let newEquipe=new Equipe();
   
        newEquipe.nomEquipe = this.reactiveForm.get('nom').value;
        newEquipe.niveau = this.reactiveForm.get('niveau').value;
        //newEquipe.detailEquipe.salle= +this.reactiveForm.get('salle').value;
        //newEquipe.detailEquipe.thematique= this.reactiveForm.get('thematique').value;
        newEquipe.idEquipe=e.idEquipe;
    
        this.EquipeS.updateEquipe(newEquipe).subscribe(function(e,newEquipe) {

          this.updateElementFromArray(e,newEquipe as Equipe);
        
          this.requested.emit(newEquipe);
          console.log(this.updateMode,this.createMode);
        }.bind(this,this.selectedEquipe) );
        
      }
    }
  }
 





      
