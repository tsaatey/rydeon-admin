import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SelectUserComponent} from "./select-user/select-user.component";
import {AddCarComponent} from "./add-car/add-car.component";
import {PageSwitcherComponent} from "./page-switcher.component";

const routes: Routes = [
  {
    path: 'add-car',
    component: AddCarComponent,
  },

];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PageSwitcherRoutingModule {}

export const routedComponents = [
  AddCarComponent,
  SelectUserComponent,
];
