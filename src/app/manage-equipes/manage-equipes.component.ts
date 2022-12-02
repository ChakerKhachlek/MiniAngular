import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Equipe } from 'app/core/models/equipe';
import { EquipeService } from 'app/core/services/equipe/equipe.service';

@Component({
  selector: 'app-manage-equipes',
  templateUrl: './manage-equipes.component.html',
  styleUrls: ['./manage-equipes.component.scss']
})
export class ManageEquipesComponent {

   listEquipes:Equipe[] = [];
   registerform: FormGroup;

   constructor(private EquipeS : EquipeService,private formBuilder : FormBuilder,){
    
   }
   ngOnInit(): void {
     this.getlistEquipes();

     this.registerform = this.formBuilder.group({
      nom : ['',[Validators.required, ]],
      niveau : ['', Validators.required],

    });
     
   }
 
   getlistEquipes(){
     this.EquipeS.getAllEquipes().subscribe(data => {
       this.listEquipes= data;
       console.log(data);
       
     });
     
    }


     deleteEquipe(e){
      this.EquipeS.deleteEquipe(e).subscribe(data =>{
      location.reload();
    }
  
    )}

    register(){

      this.EquipeS.createEquipe({body:{ 
        'nom': this.registerform.controls['nom'].value ,
        'niveau':this.registerform.controls['niveau'].value,
      }}) 
  
    }
 

}
