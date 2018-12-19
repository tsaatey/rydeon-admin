import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import {LoginComponent} from "./user-auth/login/login.component";
import {AuthGuardService} from "./user-auth/auth-guard.service";

const routes: Routes = [
  {path: 'user-auth/login', component: LoginComponent},
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule', canActivate: [AuthGuardService] },
  { path: '', redirectTo: 'pages', pathMatch: 'full', canActivate: [AuthGuardService] },
  { path: '**', redirectTo: 'pages', canActivate: [AuthGuardService] },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
