import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipe } from 'app/core/models/equipe';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {




  constructor( private http: HttpClient ) { }
  //URL du Backend
  url = "http://localhost:8089/kaddem/api/equipe/retrieve-all-equipes";

  
  getAllEquipes(){
   return this.http.get<Equipe[]>(this.url);
  }
}
