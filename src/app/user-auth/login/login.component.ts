import {Component, OnInit, ViewChild} from '@angular/core';
import {LoginService} from "../../shared/login.service";
import {NgForm} from "@angular/forms";
import {Response} from '@angular/http';
import {Router} from "@angular/router";
import {throwError} from "rxjs/index";

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  // get form object through @ViewChild
  @ViewChild('form') loginForm: NgForm;

  // variables declarations
  loginFailed: boolean = false;
  loginButtonClicked: boolean = false;
  connectionFailed: boolean = false;
  somethingWentWrong: boolean = false;
  errorText: string = '';
  warningDisplay: string = '';

  constructor(private loginService: LoginService, private router: Router) {

  }

  ngOnInit() {
  }

  onLogin() {
    this.loginButtonClicked = true;
    this.warningDisplay = 'none';
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    this.loginService.login(username, password)
      .subscribe((response) => {

        // create a variable to hold the token
        const token = response;

        // store the token in local storage
        localStorage.setItem('token', token);

        // reset the login form after a successful login
        this.loginForm.reset();

        // reset all warning and error messages
        this.loginButtonClicked = false;
        this.loginFailed = false;
        this.somethingWentWrong = false;
        this.connectionFailed = false;
        this.warningDisplay = 'block';

        // go to the home page/dashboard after login is successful
        this.router.navigate(['/pages/dashboard']);

      }, error => {
        if (error.status === 0 ) {
          this.errorText = 'Failed to connect. Check your internet connection and try again';
          this.connectionFailed = true;
          this.loginButtonClicked = false;
          this.loginFailed = false;
          this.somethingWentWrong = false;
          this.warningDisplay = 'block';
        }

        if (error.status === 401) {
          this.errorText = 'Login failed! username or password is not correct';
          this.loginFailed = true;
          this.loginButtonClicked = false;
          this.connectionFailed = false;
          this.somethingWentWrong = false;
          this.warningDisplay = 'block';
        }

        if (error.status === 403) {
          this.errorText = 'Something went wrong, please try again later.';
          this.somethingWentWrong = true;
          this.loginButtonClicked = false;
          this.loginFailed = false;
          this.connectionFailed = false;
          this.warningDisplay = 'block';
        }

      });
  }

}
