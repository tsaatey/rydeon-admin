/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MakeService} from "./shared/make.service";
import {SubscriberService} from "./shared/subscriber.service";
import {User2Service} from "./shared/user.service";
import {HelperService} from "./shared/helper.service";
import {ModelService} from "./shared/model.service";
import {YearService} from "./shared/year.service";
import {RoleService} from "./shared/role.service";
import { LoginComponent } from './user-auth/login/login.component';
import {LoginService} from "./shared/login.service";
import {HttpModule} from "@angular/http";
import {TokenInterceptor} from "./user-auth/token.interceptor";
import {AuthGuardService} from "./user-auth/auth-guard.service";
import {AuthenticationService} from "./user-auth/authentication.service";
import {ApiService} from "./shared/api.service";
import {CurrentUserService} from "./shared/current-user.service";
import {CurrentUser} from "./shared/current-user.model";
import {AngularMultiSelectModule} from "angular2-multiselect-dropdown";
import {ConnectionService} from "ng-connection-service";
import {AddUserService} from "./shared/add-user.service";

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpModule,

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    MakeService,
    SubscriberService,
    User2Service,
    HelperService,
    ModelService,
    YearService,
    RoleService,
    LoginService,
    ConnectionService,
    AddUserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AuthGuardService,
    AuthenticationService,
    ApiService,
    CurrentUserService,
    CurrentUser,
  ],
})
export class AppModule {
}
