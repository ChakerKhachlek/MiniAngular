import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContratComponent } from './add-contrat/add-contrat.component';
import { ListContratsComponent } from './list-contrats/list-contrats.component';
import { UpdateContratComponent } from './update-contrat/update-contrat.component';

const routes: Routes = [
  {path:'', component:ListContratsComponent},
  {path:'add-contrat', component:AddContratComponent },
  {path:'update-contrat', component:UpdateContratComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageContratsRoutingModule { }
