
import {NgModule} from "@angular/core";
import {PageSwitcherRoutingModule, routedComponents} from "./page-switcher-routing.module";
import {ThemeModule} from "../../../../@theme/theme.module";
import {AngularMultiSelectModule} from "angular2-multiselect-dropdown";

@NgModule({
  imports: [
    ThemeModule,
    PageSwitcherRoutingModule,
    AngularMultiSelectModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})

export class PageSwitcherModule {

}
