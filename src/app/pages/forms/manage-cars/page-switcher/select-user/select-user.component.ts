import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User2Service} from "../../../../../shared/user.service";
import {User} from "../../../../../shared/user.model";
import {HelperService} from "../../../../../shared/helper.service";
import {Employee} from "../../../../../shared/employee.model";
import {RoleService} from "../../../../../shared/role.service";
import {EmployeeService} from "../../../../../shared/employee.service";


@Component({
  selector: 'ngx-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.scss']
})
export class SelectUserComponent implements OnInit {
  users = [];
  public id: any;
  employees: Employee[] = [];
  roles = [];
  selectedRole = '';
  roleDropdownSettings = {};
  selectedRoles = [];
  usersAvailable: boolean = false;

  constructor(private helperService: HelperService, private employeeService: EmployeeService, private roleService: RoleService) {

    // this.users = this.userService.getUsers();
  }

  ngOnInit() {
    this.selectedRole = '';
    this.selectedRoles = [];
    this.roleDropdownSettings = {
      singleSelection: true,
      text: "Please click here and select a role to find users",
      selectAllText: 'Select All',
      unSelectAllText: 'Deselect All',
      enableSearchFilter: true,
      classes: "myclass custom-class"
    };
  }

  onGetUsers(role: any) {
    // get all users
    this.employeeService.getEmployees(role)
      .subscribe(response => {
        const result = response['result'];
        if (result.length > 0) {
          let i = 0;
          for (let key in result) {
            if (result.hasOwnProperty(key)) {
              this.employees[i] = new Employee(result[i]['user']['id'], result[i]['user']['phone'], result[i]['user']['email'], result[i]['user']['username'], result[i]['user']['roles']);
              this.users[i] = {
                id: result[i]['user']['id'],
                phone: result[i]['user']['phone'],
                email: result[i]['user']['email'],
                username: result[i]['user']['username']
              };
              i++;
            }
          }
          this.usersAvailable = true;
        } else {
          this.usersAvailable = false;
        }

      }, error => {
        console.log(error);
      });
  }

  get message(): any {
    return this.helperService.message;
  }

  set message(message: any) {
    this.helperService.message = message;
  }

  get immediateUser(): any {
    return this.helperService.immediateUser;
  }

  set immediateUser(immediateUser: any) {
    this.helperService.immediateUser = immediateUser;
  }

  onItemSelect(item: any) {
    const role = item['itemName'];
    this.onGetUsers(role);
  }

  OnItemDeSelect(item: any) {

  }

  onSelectAll(items: any) {
    console.log(items);
  }

  onDeSelectAll(items: any) {
    console.log(items);
  }

  onGetRoles(){
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

  goToAddCar(userId: any) {
    this.message = userId;
    this.immediateUser = this.users;
  }

}
