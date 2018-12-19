import { Component, OnInit } from '@angular/core';
import {User} from "../../../shared/user.model";
import {User2Service} from "../../../shared/user.service";

@Component({
  selector: 'ngx-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  users: User[];

  constructor(private userService: User2Service) {
    this.users = this.userService.getUsers();
  }

  ngOnInit() {
  }

  deleteUser(id: number) {
    return this.users.splice(id - 1, 1);
  }

}
