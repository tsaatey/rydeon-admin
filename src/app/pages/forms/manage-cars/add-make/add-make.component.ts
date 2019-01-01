import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {MakeService} from "../../../../shared/make.service";

@Component({
  selector: 'ngx-add-make',
  templateUrl: './add-make.component.html',
  styleUrls: ['./add-make.component.scss']
})
export class AddMakeComponent implements OnInit {

  @ViewChild('form') addMakeForm: NgForm;
  errorOccurred: boolean = false;
  dataSubmissionInProgress: boolean = false;
  message: string = '';
  dataSaved: boolean = false;

  constructor(private makeService: MakeService) { }

  ngOnInit() {
  }

  onAddMake() {
    this.dataSubmissionInProgress = true;
    const make = this.addMakeForm.value.make;
    this.makeService.addMake(make)
      .subscribe(response => {
        if (response['message'] === 'SUCCESS') {
          this.dataSaved = true;
          this.message = make + ' successfully added to the list!';
          setTimeout(() => {
            this.errorOccurred = false;
            this.dataSubmissionInProgress = false;
            this.dataSaved = false;
            this.addMakeForm.reset();
          }, 2000)
        }
      }, error => {
        this.errorOccurred = true;
        this.dataSubmissionInProgress = false;

        if (error.status === 0) {
          this.message =  'Failed to connect. Check your internet connection and try again.';
        }

        if (error.status === 500) {
          // Something went wrong! Please try again later
          this.message = 'Something went wrong! Please try again later.';
        }

        if (error.status === 403) {
          this.message = 'Action failed! You are not authorized to perform this operation!';
          // Action failed! You are not authorized to perform this operation!
        }
      });
  }

}
