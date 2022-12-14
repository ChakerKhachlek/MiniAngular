import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Universite } from 'app/core/models/universite';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  listUniversite : Universite[] = [];
  url = "http://localhost:8089/kaddem/api/universite/";

  constructor(private http:HttpClient) { }

  getAllUniversites(){
    return this.http.get<Universite[]>(this.url+"get-all-universites/");
  }

  getUniversiteByID(idUni:number){
    return this.http.get<Universite>(this.url+"get-universite/"+idUni);
  }

  addUniversite(uni:Universite){
    return this.http.post(this.url+"add-universite/",uni)
  }

  updateUniversite(uni:Universite){
    return this.http.put(this.url+"update-universite/",uni)
  }

  deleteUniversite(idUni:number){
    return this.http.delete(this.url+"delete-universite/"+idUni)
  }

}
