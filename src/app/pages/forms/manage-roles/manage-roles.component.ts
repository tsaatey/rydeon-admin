import { Component, OnInit } from '@angular/core';
import {User} from "../../../shared/user.model";
import {Role} from "../../../shared/role.model";
import {User2Service} from "../../../shared/user.service";
import {RoleService} from "../../../shared/role.service";

@Component({
  selector: 'ngx-manage-roles',
  templateUrl: './manage-roles.component.html',
  styleUrls: ['./manage-roles.component.scss']
})
export class ManageRolesComponent implements OnInit {

  users: User[];
  roles = [];

  constructor(private userService: User2Service, private roleService: RoleService) {
    // this.users = this.userService.getUsers();
  }

  ngOnInit() {

    this.roleService.getRoles()
      .subscribe(currentRoles => {
        const result = currentRoles['result'];
        let i = 0;
        let j = 0
        for (let key in result) {
          if (result.hasOwnProperty(key)) {
            this.roles[i] = {id: ++j, itemName: result[key]['roleName']};
            i++;
          }
        }
        // console.log(this.roles);
      }, err => {
        console.log(err);
      });
  }

}
