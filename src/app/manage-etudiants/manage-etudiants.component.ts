import { Component } from '@angular/core';
import { Etudiant } from 'app/core/models/etudiant';
import { EtudiantServiceService } from 'app/core/services/etudiants/etudiant-service.service';

@Component({
  selector: 'app-manage-etudiants',
  templateUrl: './manage-etudiants.component.html',
  styleUrls: ['./manage-etudiants.component.scss']
})
export class ManageEtudiantsComponent {

  listEtudiants:Etudiant[] = [];
  constructor(private etudiantService : EtudiantServiceService){
   
  }
  ngOnInit(): void {
    this.getEtudiants();
  }

  getEtudiants(){
    this.etudiantService.getAllEtudiants().subscribe(data => {
      this.listEtudiants= data;
      console.log(data);
      
    });
    
   }
}
