import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import {AddUserComponent} from "./forms/add-user/add-user.component";
import {DeleteUserComponent} from "./forms/delete-user/delete-user.component";
import {UpdateUserComponent} from "./forms/update-user/update-user.component";
import {SuspendUserComponent} from "./forms/suspend-user/suspend-user.component";
import {AddMakeComponent} from "./forms/manage-cars/add-make/add-make.component";
import {AddModelComponent} from "./forms/manage-cars/add-model/add-model.component";
import {AddCarComponent} from "./forms/manage-cars/page-switcher/add-car/add-car.component";
import {SelectUserComponent} from "./forms/manage-cars/page-switcher/select-user/select-user.component";
import {PageSwitcherComponent} from "./forms/manage-cars/page-switcher/page-switcher.component";
import {ManageRolesComponent} from "./forms/manage-roles/manage-roles.component";
import {AuthGuardService} from "../user-auth/auth-guard.service";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
  }, {
    path: 'ui-features',
    loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
  }, {
    path: 'components',
    loadChildren: './components/components.module#ComponentsModule',
  }, {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule',
  }, {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule',
  }, {
    path: 'editors',
    loadChildren: './editors/editors.module#EditorsModule',
  }, {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule',
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule',
  }, {
    path: 'miscellaneous',
    loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
  }, {
    path: 'forms/add-user',
    component: AddUserComponent,
  },{
    path: 'forms/delete-user',
    component: DeleteUserComponent,
  },{
    path: 'forms/update-user',
    component: UpdateUserComponent,
  },{
    path: 'forms/suspend-user',
    component: SuspendUserComponent,
  }, {
    path: 'forms/manage-cars/add-make',
    component: AddMakeComponent,
  },{
    path: 'forms/manage-cars/add-model',
    component: AddModelComponent,
  }, {
    path: 'forms/manage-cars/page-switcher/select-user',
    component: SelectUserComponent,
  }, {
    path: 'forms/manage-cars/page-switcher/add-car',
    component: AddCarComponent,
  }, {
    path: 'forms/manage-roles',
    component: ManageRolesComponent,
  }, {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '**',
    component: NotFoundComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
