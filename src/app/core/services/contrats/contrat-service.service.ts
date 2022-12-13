import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contrat } from 'app/core/models/contrat';

@Injectable({
  providedIn: 'root'
})
export class ContratServiceService {

  contratsList: Contrat[] = [];


  constructor(private http: HttpClient) { }
  //URL du Backend
  url = "http://localhost:8089/kaddem/contrat/";


  getAllContrats() {
    return this.http.get<Contrat[]>(this.url + "retrieve-all-contrats");
  }
  addContrat(contrat: Contrat) {
    return this.http.post(this.url + "add-contrat", contrat)
  }

  updateContrat(contrat: Contrat) {
    return this.http.put<Contrat>(this.url +'update-contrat', contrat);
  }
  deleteContrat(id:Number){
    return this.http.delete(this.url+'remove-contrat/'+id);
  }
}
