import { Component } from '@angular/core';
import { Equipe } from 'app/core/models/equipe';
import { EquipeService } from 'app/core/services/equipe/equipe.service';

@Component({
  selector: 'app-manage-equipes',
  templateUrl: './manage-equipes.component.html',
  styleUrls: ['./manage-equipes.component.scss']
})
export class ManageEquipesComponent {

   listEquipes:Equipe[] = [];
   constructor(private EquipeS : EquipeService){
    
   }
   ngOnInit(): void {
     this.getlistEquipes();
   }
 
   getlistEquipes(){
     this.EquipeS.getAllEquipes().subscribe(data => {
       this.listEquipes= data;
       console.log(data);
       
     });
     
    }

}
