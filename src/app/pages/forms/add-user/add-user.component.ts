import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {HelperService} from "../../../shared/helper.service";
import {AddUserService} from "../../../shared/add-user.service";

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
  selectedGender = [];
  gender = [];
  errorText: string = '';
  errText: string = 'Please confirm password';
  selected_gender = '';

  selectedItems = [];
  dropdownSettings = {};

  userInfo = {};

  constructor(private helperService: HelperService, private addUserService: AddUserService) {

  }

  ngOnInit() {

    // this.roleService.getRoles()
    //   .subscribe(currentRoles => {
    //     const result = currentRoles['result'];
    //     let i = 0;
    //     let j = 0
    //     for (let key in result) {
    //       if (result.hasOwnProperty(key)) {
    //         this.roles[i] = {id: ++j, itemName: result[key]['roleName']};
    //         i++;
    //       }
    //     }
    //     // console.log(this.roles);
    //   }, err => {
    //     console.log(err);
    //   });

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

  onItemSelect(item: any) {
    // console.log(item);
    // console.log(this.selectedItems);
    this.selected_gender = item;
  }

  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
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

  onAddUser() {

    // Get all form values
    const firstname = this.addUserForm.value.firstname;
    const lastname = this.addUserForm.value.lastname;
    const gender = this.selected_gender['id'];
    const phone = this.addUserForm.value.phone;
    const email = this.addUserForm.value.email;
    const username = this.addUserForm.value.username;
    const password = this.addUserForm.value.password;
    const confirmPassword = this.addUserForm.value.cPassword;

    // Create a form data object
    let data = new FormData();

    // Append all form values to the form data object
    data.append('firstaname', firstname);
    data.append('lastname', lastname);
    data.append('gender', gender);
    data.append('phoneNumber', phone);
    data.append('email', email);
    data.append('username', username);
    data.append('password', password);
    data.append('confirmPassword', confirmPassword);

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

    // Submit data to the create_user api
    this.addUserService.createUserAccount(JSON.stringify(this.userInfo))
      .subscribe(response => {
        console.log('This is the response:' + response);
      }, err => {
        console.log('Cannot save: ' + err);
      });

  }


}
