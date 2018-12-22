import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { AddUserComponent } from './forms/add-user/add-user.component';
import {DeleteUserComponent} from "./forms/delete-user/delete-user.component";
import {UpdateUserComponent} from "./forms/update-user/update-user.component";
import {SuspendUserComponent} from "./forms/suspend-user/suspend-user.component";
import {AddMakeComponent} from "./forms/manage-cars/add-make/add-make.component";
import {AddModelComponent} from "./forms/manage-cars/add-model/add-model.component";
import {AddCarComponent} from "./forms/manage-cars/page-switcher/add-car/add-car.component";
import {SelectUserComponent} from "./forms/manage-cars/page-switcher/select-user/select-user.component";
import {PageSwitcherComponent} from "./forms/manage-cars/page-switcher/page-switcher.component";
import {PageSwitcherRoutingModule} from "./forms/manage-cars/page-switcher/page-switcher-routing.module";
import {PageSwitcherModule} from "./forms/manage-cars/page-switcher/page-switcher.module";
import {ManageRolesComponent} from "./forms/manage-roles/manage-roles.component";
import {AngularMultiSelectModule} from "angular2-multiselect-dropdown";
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    MiscellaneousModule,
    PageSwitcherModule,
    AngularMultiSelectModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    AddUserComponent,
    DeleteUserComponent,
    UpdateUserComponent,
    SuspendUserComponent,
    AddMakeComponent,
    AddModelComponent,
    PageSwitcherComponent,
    ManageRolesComponent,
    EditProfileComponent,
  ],
})
export class PagesModule {
}
