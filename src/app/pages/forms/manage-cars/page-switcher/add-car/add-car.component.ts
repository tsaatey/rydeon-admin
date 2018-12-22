import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SelectUserComponent} from "../select-user/select-user.component";
import {HelperService} from "../../../../../shared/helper.service";
import {User2Service} from "../../../../../shared/user.service";
import {User} from "../../../../../shared/user.model";
import {MakeService} from "../../../../../shared/make.service";
import {ModelService} from "../../../../../shared/model.service";
import {Make} from "../../../../../shared/make.model";
import {Model} from "../../../../../shared/model.model";
import {YearService} from "../../../../../shared/year.service";
import {Year} from "../../../../../shared/year.model";
import {Router} from "@angular/router";

@Component({
  selector: 'ngx-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {

  @ViewChild(SelectUserComponent) user;
  users: User[];
  makes: Make[];
  models: Model[];
  years: Year[];

  id: any;
  currentUser: any;
  username: string;
  warning: string;
  isUsernameEmpty: boolean = false;

  constructor(private router: Router, private helperService: HelperService, private userService: User2Service, private makeService: MakeService, private modelService: ModelService, private yearService: YearService) {
    // this.users = this.userService.getUsers().slice();
    this.makes = this.makeService.getMakes();
    this.models = this.modelService.getModels();
    this.years = this.yearService.getYears();
  }

  ngOnInit() {
    // this.id = this.helperService.message;
    // if (this.id) {
    //   this.currentUser = this.users[this.id - 1];
    //   this.username = 'Client:  ' + this.currentUser.firstname + ' ' + this.currentUser.lastname;
    // } else {
    //   this.isUsernameEmpty = true;
    //   this.warning = 'Please go back and select a user!!!';
    //   this.router.navigate(['/pages/forms/manage-cars/page-switcher/select-user']);
    // }

  }


}
