import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Etudiant } from '../../models/etudiant';
 

@Injectable({
  providedIn: 'root'
})
export class EtudiantServiceService {

  etudiantsList: Etudiant[]= [];


  constructor( private http: HttpClient ) { }
  //URL du Backend
  url = "http://localhost:8089/kaddem/api/";

  
  getAllEtudiants(){
   return this.http.get<Etudiant[]>(this.url+"etudiant/retrieve-all-etudiants");
  }

  getEtudiantById(id: Number){
    return this.http.get<Etudiant>(this.url+'etudiant/retrieve-etudiant/'+id);
  }

  addEtudiant(etudiant:Etudiant){
    return this.http.post(this.url+'etudiant/add-etudiant',etudiant);
  }

  deleteEtudiant(id:Number){
    return this.http.delete(this.url+'etudiant/remove-etudiant/'+id);
  }

  updateEtudiant(etudiant:Etudiant){
    return this.http.put<Etudiant>(this.url+'etudiant/update-etudiant', etudiant);
  }

  sendEmailToEtudiant(id:Number,message:string){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("message",message);

    return this.http.get<Etudiant>(this.url+'etudiant/notifieretudiant/'+id,{params:queryParams});
  }
  
}
