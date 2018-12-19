
import {NgModule} from "@angular/core";
import {PageSwitcherRoutingModule, routedComponents} from "./page-switcher-routing.module";
import {ThemeModule} from "../../../../@theme/theme.module";

@NgModule({
  imports: [
    ThemeModule,
    PageSwitcherRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})

export class PageSwitcherModule {

}
