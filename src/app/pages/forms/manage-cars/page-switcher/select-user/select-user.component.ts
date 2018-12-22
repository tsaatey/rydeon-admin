import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User2Service} from "../../../../../shared/user.service";
import {User} from "../../../../../shared/user.model";
import {HelperService} from "../../../../../shared/helper.service";


@Component({
  selector: 'ngx-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.scss']
})
export class SelectUserComponent implements OnInit {
  users: User[];
  public id: any;

  constructor(private userService: User2Service, private helperService: HelperService) {
    // this.users = this.userService.getUsers();
  }

  ngOnInit() {
  }

  goToAddCar(id: any) {
    this.message = id;
  }

  get message(): any {
    return this.helperService.message;
  }

  set message(message: any) {
    this.helperService.message = message;
  }
}
