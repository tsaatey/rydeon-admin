import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule, routedComponents } from './forms-routing.module';
import { SelectUserComponent } from './manage-cars/page-switcher/select-user/select-user.component';
import { ManageCarsComponent } from './manage-cars/manage-cars.component';
import { PageSwitcherComponent } from './manage-cars/page-switcher/page-switcher.component';
import { ManageRolesComponent } from './manage-roles/manage-roles.component';

@NgModule({
  imports: [
    ThemeModule,
    FormsRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class FormsModule { }
