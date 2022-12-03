import { Component } from '@angular/core';
import { FormArray,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Equipe } from 'app/core/models/equipe';
import { EquipeService } from 'app/core/services/equipe/equipe.service';

@Component({
  selector: 'app-manage-equipes',
  templateUrl: './manage-equipes.component.html',
  styleUrls: ['./manage-equipes.component.scss']
})
export class ManageEquipesComponent {

   listEquipes:Equipe[] = [];

   constructor(private EquipeS : EquipeService,private fb : FormBuilder,){
    
   }

   reactiveForm = this.fb.group({
    nom:['', [Validators.required, Validators.minLength(3)]],
    niveau: [''],
 
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

    Save(){
      console.log(this.reactiveForm);
      let equipe = this.reactiveForm.getRawValue();
      console.log("equipe = ", equipe);
  
    }
 




}
