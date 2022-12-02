import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Etudiant } from '../../models/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantServiceService {

  etudiantsList: Etudiant[]= [];


  constructor( private http: HttpClient ) { }
  //URL du Backend
  url = "http://localhost:8089/kaddem/api/etudiant/retrieve-all-etudiants";

  
  getAllEquipes(){
   return this.http.get<Etudiant[]>(this.url);
  }
}
