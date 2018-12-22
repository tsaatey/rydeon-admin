import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {HelperService} from "../../../shared/helper.service";
import {AddUserService} from "../../../shared/add-user.service";
import {RoleService} from "../../../shared/role.service";

@Component({
  selector: 'ngx-user-forms',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  @ViewChild('form') addUserForm: NgForm;
  roles = [];
  passwordsDoNotMatch: boolean = false;
  passwordValidated: boolean = false;
  roles_selected: boolean = false;
  createAccountButtonClicked: boolean = false;
  selectedGender = [];
  gender = [];
  errorText: string = '';
  errText: string = 'Please confirm password';
  selected_gender = '';
  dropdownSettings = {};
  roleDropdownSettings = {};
  selectedRoles = [];
  userInfo = {};
  accountErrorMessage = '';
  accountFailed: boolean = false;

  constructor(private helperService: HelperService, private addUserService: AddUserService, private roleService: RoleService) {

  }

  ngOnInit() {
    if (this.selectedRoles.length > 0) {
      this.roles_selected = true;
    } else {
      this.roles_selected = false;
    }


  }

  onItemSelect(item: any) {
    // console.log(item);
    // console.log(this.selectedItems);
    this.selected_gender = item;
  }

  OnItemDeSelect(item: any) {

  }

  onSelectAll(items: any) {
    console.log(items);
  }

  onDeSelectAll(items: any) {
    console.log(items);
  }

  onReset() {
    // reset form
    this.addUserForm.reset();
  }

  passwordValidate() {
    if (this.helperService.validatePassword(this.addUserForm.value.password)) {
      this.passwordValidated = true;
      this.errorText = 'Please provide a password';
    } else {
      this.passwordValidated = false;
      this.errorText = 'Password must contain at least 6 characters, including UPPER/lower case and numbers!';
    }
  }

  matchPassword() {
    const password = this.addUserForm.value.password;
    const confirm_pass = this.addUserForm.value.cPassword;

    if (!this.helperService.passwordMatch(password, confirm_pass)) {
      this.passwordsDoNotMatch = true;
      this.errText = 'Passwords do not match!';
    } else {
      this.passwordsDoNotMatch = false;
    }


  }

  fetchGender() {
    this.gender = [
      {id: 'Male', itemName: 'Male'},
      {id: 'Female', itemName: 'Female'}
    ]

    this.selectedGender = [];
    this.dropdownSettings = {
      singleSelection: true,
      text: "Select Gender",
      selectAllText: 'Select All',
      unSelectAllText: 'Deselect All',
      enableSearchFilter: false,
      classes: "myclass custom-class"
    };
  }

  fetchRoles() {
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

    this.selectedRoles = [];
    this.roleDropdownSettings = {
      singleSelection: false,
      text: "Select Roles",
      selectAllText: 'Select All',
      unSelectAllText: 'Deselect All',
      enableSearchFilter: true,
      classes: "myclass custom-class"
    };
  }

  onAddUser() {
    this.createAccountButtonClicked = true;

    // Get all form values
    const firstname = this.addUserForm.value.firstname;
    const lastname = this.addUserForm.value.lastname;
    const gender = this.selected_gender['id'];
    const phone = this.addUserForm.value.phone;
    const email = this.addUserForm.value.email;
    const username = this.addUserForm.value.username;
    const password = this.addUserForm.value.password;
    const confirmPassword = this.addUserForm.value.cPassword;

    // Create a JavaScript object of user
    this.userInfo = {
      firstname: firstname,
      lastname: lastname,
      gender: this.selected_gender['id'],
      email: email,
      username: username,
      phoneNumber: phone,
      password: password,
      confirmPassword: confirmPassword
    };

    // Get IDs of selected roles
    const selectedRoleId = [];
    let i = 0;
    for (let key in this.selectedRoles) {
      if (this.selectedRoles.hasOwnProperty(key)) {
        selectedRoleId[i] = this.selectedRoles[key]['id'];
        i++;
      }
    }

    // Submit data to the create_user api
    this.addUserService.createUserAccount(JSON.stringify(this.userInfo))
      .subscribe(response => {
        if (response['message'] === 'SUCCESS') {
          // Get the created user's ID from the person object returned
          const result = response['result'];
          const userId = result['id'];

          // Create a role object
          const role = {
            userId: userId,
            roleId: selectedRoleId
          };

          // Submit selected roles to role assignment api
          this.roleService.assignRoles(JSON.stringify(role))
            .subscribe(response => {
              if (response['message'] === 'SUCCESS') {
                // Clear form contents
                this.createAccountButtonClicked = false;
                this.addUserForm.reset();
                this.passwordsDoNotMatch = false;
                this.passwordValidated = false;
              }
            }, error2 => {
              // log error2 message
            });
        }
      }, err => {
        this.createAccountButtonClicked = false;
        this.createAccountButtonClicked = false;
        this.passwordsDoNotMatch = false;
        this.passwordValidated = false;
        this.accountFailed = true;

        if (err.status === 0) {
          this.accountErrorMessage = 'Failed to connect. Check your internet connection and try again';
        }

        if (err.status === 403) {
          this.accountErrorMessage = 'Action failed! You are not authorized to perform this operation!';
        }

        if (err.status === 500) {
          this.accountErrorMessage = 'Something went wrong! Please try again later';
        }
      });

  }


}
