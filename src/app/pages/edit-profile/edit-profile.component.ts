import { Component, OnInit } from '@angular/core';
import {CurrentUserService} from "../../shared/current-user.service";
import {HelperService} from "../../shared/helper.service";
import {CurrentUser} from "../../shared/current-user.model";
import {ImageCroppedEvent} from "ngx-image-cropper";
import {EmployeeService} from "../../shared/employee.service";

@Component({
  selector: 'ngx-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  currentUser = new CurrentUser();
  maleSelected: boolean = false;
  femaleSelected: boolean = false;
  otherSelected: boolean = false;
  editProfile: boolean = false;
  pictureCropped = false;
  showCropButton = false;
  realImage: File = null;

  constructor(private currentUserService: CurrentUserService, private helperService: HelperService, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.currentUserService.fetchCurrentUserData()
      .subscribe(response => {
        this.currentUser.id = response['id'];
        this.currentUser.firstname = response['firstname'];
        this.currentUser.lastname = response['lastname'];
        this.currentUser.othernames = response['othernames'];
        this.currentUser.gender = response['gender'];
        this.currentUser.phone = response['phone'];
        this.currentUser.email = response['email'];
        //this.currentUser.role = response['role']

        if (response['image']) {
          this.currentUser.image = this.helperService.getImage(response['image']);
        } else {
          this.currentUser.image = this.helperService.getAvatar();
        }

        this.currentUser.digitalAddress = response['digitalAddress'];

        if (this.currentUser.gender === 'Male') {
          this.maleSelected = true;
        }

        if (this.currentUser.gender === 'Female') {
          this.femaleSelected = true;
        }

        if (this.currentUser.gender === 'Other') {
          this.otherSelected = true;
        }
      },  error => {
        console.log(error);
      })

  }

  displayProfileEditForm() {
    this.editProfile = true;
  }

  hideProfileForm() {
    this.editProfile = false;
    this.currentUser.image = this.helperService.getAvatar();
  }

  imageChangedEvent: any = '';
  croppedImage: any = '';

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.currentUser.image = this.croppedImage;
    this.realImage = <File>event.file;
    this.showCropButton = true;

  }
  imageLoaded() {
    // show cropper
  }
  loadImageFailed() {
    // show message
  }

  hideImageCropper() {
    this.pictureCropped = true;
    this.showCropButton = false;
  }

  onUploadEmployeePicture() {
    const data = new FormData();
    data.append('image', this.realImage);

    this.employeeService.uploadEmployeePicture(data)
      .subscribe(response => {
        console.log(response);
      }, error => {
        console.log(error);
      });
  }

}
