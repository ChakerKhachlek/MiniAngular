import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DetailsEquipe } from 'app/core/models/detailsEquipe';
import { Equipe } from 'app/core/models/equipe';
import { Observable } from 'rxjs';
import { DetailEquipeService } from './detail-equipe.service';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  constructor( private http: HttpClient ) { }
  //URL du Backend
  url = "http://localhost:8089/kaddem/equipe/";
  url2 = "http://localhost:8089/kaddem/DetailEquipe/";


  
  getAllEquipes(){
   return this.http.get<Equipe[]>(this.url+"retrieve-all-equipes");
  }

  createEquipe(Equipe: Equipe) {  
    return this.http.post(`${this.url}`+'add-equipe', Equipe);  
  } 

  createEquipeDet(Equipe: Equipe, Det: DetailsEquipe ){  
    return this.http.post(`${this.url}`+'add-equipe-detail', {Equipe,Det} ) ;  
  } 

  
  updateEquipe(details: Equipe) {
    return this.http.put(`${this.url}`+'update-equipe', details);
  }

  updateDetailEquipe(details: DetailsEquipe) {
    return this.http.put(`${this.url2}`+'update-detailEquipe', details);
  }

  deletebaseurl=this.url+'remove-equipe';
  deleteEquipe(id: number): Observable<any> {
    return this.http.delete(`${this.deletebaseurl}/${id}`, { responseType: 'text' });
  }


}
