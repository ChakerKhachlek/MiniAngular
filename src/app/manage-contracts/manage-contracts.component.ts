import { Component } from '@angular/core';
import { Contrat } from 'app/core/models/contrat';
import { ContratServiceService } from 'app/core/services/contrats/contrat-service.service';

@Component({
  selector: 'app-manage-contracts',
  templateUrl: './manage-contracts.component.html',
  styleUrls: ['./manage-contracts.component.scss']
})
export class ManageContractsComponent {
  listContrats:Contrat[] = [];
  constructor(private ContratService : ContratServiceService){
   
  }
  ngOnInit(): void {
    this.getContrats();
  }

  getContrats(){
    this.ContratService.getAllContrats().subscribe(data => {
      this.listContrats= data;
      console.log(data);
      
    });
    
   }
}
