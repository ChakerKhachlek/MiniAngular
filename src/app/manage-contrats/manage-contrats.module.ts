import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageContratsRoutingModule } from './manage-contrats-routing.module';
import { ListContratsComponent } from './list-contrats/list-contrats.component';
import { AddContratComponent } from './add-contrat/add-contrat.component';
import { UpdateContratComponent } from './update-contrat/update-contrat.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    ListContratsComponent,
    AddContratComponent,
    UpdateContratComponent,

  ],
  imports: [
    CommonModule,
    ManageContratsRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule

  ]
})
export class ManageContratsModule { }
