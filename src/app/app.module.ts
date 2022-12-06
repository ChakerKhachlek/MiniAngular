import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ManageEtudiantsComponent } from './manage-etudiants/manage-etudiants.component';
import { ManageUniversitiesComponent } from './manage-universities/manage-universities.component';
import { ManageContractsComponent } from './manage-contracts/manage-contracts.component';
import { ManageEquipesComponent } from './manage-equipes/manage-equipes.component';
import { CreateEtudiantComponent } from './manage-etudiants/create-etudiant/create-etudiant.component';
import { UpdateEtudiantComponent } from './manage-etudiants/update-etudiant/update-etudiant.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [ 
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ManageEtudiantsComponent,
    ManageUniversitiesComponent,
    ManageContractsComponent,
    ManageEquipesComponent,
    CreateEtudiantComponent,
    UpdateEtudiantComponent,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
