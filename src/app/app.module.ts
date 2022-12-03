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
import { ManageDepartmentsComponent } from './manage-departments/manage-departments.component';
import { AddDepartmentComponent } from './manage-departments/create-departments/add-department/add-department.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ManageEtudiantsComponent,
    ManageUniversitiesComponent,
    ManageContractsComponent,
    ManageEquipesComponent,
    ManageDepartmentsComponent,
    AddDepartmentComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
