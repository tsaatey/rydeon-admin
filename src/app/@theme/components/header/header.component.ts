import {Component, Inject, Input, OnInit} from '@angular/core';

import {NB_WINDOW, NbMenuService, NbSidebarService} from '@nebular/theme';
import {AnalyticsService} from '../../../@core/utils/analytics.service';
import {CurrentUserService} from "../../../shared/current-user.service";
import {filter, map} from "rxjs/internal/operators";
import {HelperService} from "../../../shared/helper.service";
import {ConnectionService} from "ng-connection-service";
import {Router} from "@angular/router";

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


  @Input() position = 'normal';
  user: any;
  userMenu = [{title: 'Profile'}, {title: 'Log out'}];
  image = '';

  status = 'ONLINE';
  isConnected = true;

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private analyticsService: AnalyticsService,
              private currentUserService: CurrentUserService,
              @Inject(NB_WINDOW) private window,
              private helperService: HelperService,
              private connectionService: ConnectionService,
              private router: Router) {

    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
      if (this.isConnected) {
        this.status = "ONLINE";
      }
      else {
        this.status = "OFFLINE";
      }
    })
  }

  ngOnInit() {
    // if (this.status === 'ONLINE') {
    //   this.currentUserService.fetchCurrentUserData()
    //     .subscribe(currentUser => {
    //       this.user = {
    //         name: currentUser['firstname'] + ' ' + currentUser['lastname'],
    //         picture: this.helperService.getImage(currentUser['image'])
    //       }
    //     });
    // } else {
    //   this.user = {
    //     name: localStorage.getItem('firstname') + ' ' + localStorage.getItem('lastname'),
    //     picture: this.helperService.getImage(localStorage.getItem('image'))
    //   }
    // }

    this.currentUserService.fetchCurrentUserData()
      .subscribe(currentUser => {
        if (currentUser['image']) {
          this.image = this.helperService.getImage(currentUser['image']);
        } else {
          this.image = this.helperService.getAvatar();
        }
        this.user = {
          name: currentUser['firstname'] + ' ' + currentUser['lastname'],
          picture: this.image
        }
      });


    this.menuService.onItemClick()
      .pipe(
        filter(({tag}) => tag === 'user_profile'),
        map(({item: {title}}) => title),
      )
      .subscribe(title => {
        if (title === 'Profile') {
          // navigate to profile page
          this.router.navigate(['pages/edit-profile']);
        }

        if (title === 'Log out') {
          localStorage.clear();
          location.reload();
        }
      });
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
}
