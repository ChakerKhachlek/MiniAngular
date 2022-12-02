import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipe } from 'app/core/models/equipe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  constructor( private http: HttpClient ) { }
  //URL du Backend
  url = "http://localhost:8089/kaddem/api/equipe/";

  
  getAllEquipes(){
   return this.http.get<Equipe[]>(this.url+"retrieve-all-equipes");
  }

  createEquipe(Equipe: any): Observable<object> {  
    return this.http.post(`${this.url}`+'add-equipe', Equipe);  
  } 

  
  updateEquipe(details: any): Observable<Object> {
    return this.http.put(`${this.url}`+'update-equipe', details);
  }

  deletebaseurl=this.url+'remove-equipe';
  deleteEquipe(id: number): Observable<any> {
    return this.http.delete(`${this.deletebaseurl}/${id}`, { responseType: 'text' });
  }


}
