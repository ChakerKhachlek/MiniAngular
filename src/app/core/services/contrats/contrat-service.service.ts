import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contrat } from 'app/core/models/contrat';

@Injectable({
  providedIn: 'root'
})
export class ContratServiceService {

  contratsList: Contrat[]= [];


  constructor( private http: HttpClient ) { }
  //URL du Backend
  url = "http://localhost:8089/kaddem/contrat/retrieve-all-contrats";

  
  getAllContrats(){
   return this.http.get<Contrat[]>(this.url);
  }
}
