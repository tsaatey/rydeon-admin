import { Component, OnInit } from '@angular/core';
import {User} from "../../../shared/user.model";
import {User2Service} from "../../../shared/user.service";
import {RoleService} from "../../../shared/role.service";
import {Employee} from "../../../shared/employee.model";
import {EmployeeService} from "../../../shared/employee.service";

@Component({
  selector: 'ngx-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  employees: Employee[] = [];
  roles = [];
  selectedRole = '';
  roleDropdownSettings = {};
  selectedRoles = [];
  usersAvailable: boolean = false;

  constructor(private employeeService: EmployeeService, private roleService: RoleService) {

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

  deleteUser(id: number) {
    // Submit userId to deleteUser API
    // Call delete method in employee service
    this.employeeService.deleteEmployee(id);

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

}
