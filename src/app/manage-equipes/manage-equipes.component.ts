import { Component, Input } from '@angular/core';
import { FormArray,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DetailsEquipe } from 'app/core/models/detailsEquipe';
import { Equipe } from 'app/core/models/equipe';
import { EquipeService } from 'app/core/services/equipe/equipe.service';

@Component({
  selector: 'app-manage-equipes',
  templateUrl: './manage-equipes.component.html',
  styleUrls: ['./manage-equipes.component.scss']
})
export class ManageEquipesComponent {
  @Input() selectedEquipe:Equipe ;

   listEquipes:Equipe[] = [];

   constructor(private EquipeS : EquipeService,private fb : FormBuilder,){
    
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


     deleteEquipe(e){
      this.EquipeS.deleteEquipe(e).subscribe(data =>{
      location.reload();
    }
  
    )}



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
    
       
      window.location.reload();

    }
  }

    updateEtudiant(){
      if(this.reactiveForm.valid){
        let newEquipe=new Equipe();
   
        newEquipe.nomEquipe = this.reactiveForm.get('nom').value;
        newEquipe.niveau = this.reactiveForm.get('niveau').value;
    
        newEquipe.idEquipe=this.selectedEquipe.idEquipe;
    
        this.EquipeS.updateEquipe(newEquipe).subscribe(function(selectedEquipe,newEquipe) {

          this.updateElementFromArray(selectedEquipe,newEquipe as Equipe);
        
          this.requested.emit(newEquipe);
          console.log(this.updateMode,this.createMode);
        }.bind(this,this.selectedEquipe) );
        
      }
    }
  }
 





      
