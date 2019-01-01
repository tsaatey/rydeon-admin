import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {SelectUserComponent} from "../select-user/select-user.component";
import {HelperService} from "../../../../../shared/helper.service";
import {User2Service} from "../../../../../shared/user.service";
import {MakeService} from "../../../../../shared/make.service";
import {ModelService} from "../../../../../shared/model.service";
import {YearService} from "../../../../../shared/year.service";
import {Year} from "../../../../../shared/year.model";

@Component({
  selector: 'ngx-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {

  @ViewChild(SelectUserComponent) user;
  users: any;
  makes: any;
  models: any;
  years: Year[];

  userId: any;
  currentUser: any;
  username: string;
  warning: string;
  isUsernameEmpty: boolean = false;
  selectedMake = '';

  constructor(private router: Router, private helperService: HelperService, private makeService: MakeService, private modelService: ModelService, private yearService: YearService) {
    this.years = this.yearService.getYears();
    this.makeService.getMakes()
      .subscribe(response => {
        this.makes = response;
      });
  }

  ngOnInit() {
    this.userId = this.helperService.message;
    this.users = this.helperService.immediateUser;

    if (this.userId) {
      this.currentUser = this.users.find(
        (s) => {
          return s.id === this.userId;
        }
      );
      this.username = 'Client:  ' + this.currentUser.email;

    } else {
      this.isUsernameEmpty = true;
      // this.warning = 'Please go back and select a user!!!';
      this.router.navigate(['/pages/forms/manage-cars/page-switcher/select-user']);
    }

  }

  onchange($event) {
    this.selectedMake = $event.target.value;
    this.modelService.getModels(this.selectedMake)
      .subscribe(response => {
        this.models = response;
      }, error => {
        console.log(error);
      });
  }

  onAddCar() {
    // Body yet to be implemented
  }

}
