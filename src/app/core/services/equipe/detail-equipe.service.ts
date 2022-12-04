import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DetailsEquipe } from 'app/core/models/detailsEquipe';

@Injectable({
  providedIn: 'root'
})
export class DetailEquipeService {

  constructor(private http: HttpClient) { }


  url = "http://localhost:8089/kaddem/DetailEquipe/";

  
 

  createEquipe(Dequipe: DetailsEquipe) {  
    return this.http.post(`${this.url}`+'add-detailequipe', Dequipe);  
  } 

}
