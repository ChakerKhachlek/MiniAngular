import { Etudiant } from "./etudiant";

export class Contrat{

    idContrat!: number;
    specialite!: string;
    archive!: boolean;
    montantContrat!: number;
    dateDebutContrat!: Date;
    dateFinContrat!:Date;
    etudiant:Etudiant;
    
}



  
  