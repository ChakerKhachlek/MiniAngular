import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ManageEtudiantsComponent } from 'app/manage-etudiants/manage-etudiants.component';
import { ManageUniversitiesComponent } from 'app/manage-universities/manage-universities.component';
import { ManageContractsComponent } from 'app/manage-contracts/manage-contracts.component';
import { ManageEquipesComponent } from 'app/manage-equipes/manage-equipes.component';
import { ManageDepartmentsComponent } from 'app/manage-departments/manage-departments.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'manage-etudiants',     component: ManageEtudiantsComponent },
    { path: 'manage-universities',     component: ManageUniversitiesComponent },
    { path: 'manage-contracts',          component: ManageContractsComponent },
    { path: 'manage-equipes',           component: ManageEquipesComponent },
    { path: 'manage-departments',           component: ManageDepartmentsComponent },


];
