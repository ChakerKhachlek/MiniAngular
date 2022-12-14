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
import { ManageEquipesComponent } from './manage-equipes/manage-equipes.component';
import {MatInputModule} from '@angular/material/input';

import { CreateEtudiantComponent } from './manage-etudiants/create-etudiant/create-etudiant.component';
import { UpdateEtudiantComponent } from './manage-etudiants/update-etudiant/update-etudiant.component';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ManageDepartmentsComponent } from './manage-departments/manage-departments.component';
import { AddDepartmentComponent } from './manage-departments/create-departments/add-department/add-department.component';

import { UpdateDepartmentComponent } from './manage-departments/update-department/update-department.component';
import { SearchFilterPipe } from './search-filter.pipe';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ManageContratsModule } from './manage-contrats/manage-contrats.module';




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
    MatInputModule,
     Ng2SearchPipeModule ,
    ManageContratsModule,
   
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ManageEtudiantsComponent,
    ManageUniversitiesComponent,
    
    ManageEquipesComponent,

    CreateEtudiantComponent,
    UpdateEtudiantComponent,

    ManageDepartmentsComponent,
    AddDepartmentComponent,
    UpdateDepartmentComponent,
    SearchFilterPipe
 



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
