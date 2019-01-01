import {Component, OnInit, ViewChild} from '@angular/core';
import {MakeService} from "../../../../shared/make.service";
import {NgForm} from "@angular/forms";
import {ModelService} from "../../../../shared/model.service";

@Component({
  selector: 'ngx-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.scss']
})
export class AddModelComponent implements OnInit {

  @ViewChild('form') addModelForm: NgForm;
  makes: any;
  errorOccurred: boolean = false;
  dataSubmissionInProgress: boolean = false;
  message: string = '';
  dataSaved: boolean = false;

  constructor(private makeService: MakeService, private modelService: ModelService) {
  }

  ngOnInit() {
    this.makeService.getMakes()
      .subscribe(response => {
        this.makes = response;
      }, error => {
        console.log(error);
      });
  }

  onAddModel() {
    this.dataSubmissionInProgress = true;

    const makeId = this.addModelForm.value.makeId;
    const modelName = this.addModelForm.value.model;

    this.modelService.addModel(makeId, modelName)
      .subscribe(response => {
        if (response['message'] === 'SUCCESS') {
          this.dataSaved = true;
          this.message = modelName + ' successfully added to the list!';

          setTimeout(() => {
            this.errorOccurred = false;
            this.dataSubmissionInProgress = false;
            this.dataSaved = false;
            this.addModelForm.reset();
          }, 2000);
        }
      }, err => {
        // handle error
        this.errorOccurred = true;
        this.dataSubmissionInProgress = false;

        if (err.status === 0) {
          this.message = 'Failed to connect. Check your internet connection and try again.';
        }

        if (err.status === 500) {
          // Something went wrong! Please try again later
          this.message = 'Something went wrong! Please try again later.';
        }

        if (err.status === 403) {
          this.message = 'Action failed! You are not authorized to perform this operation!';
          // Action failed! You are not authorized to perform this operation!
        }
      });
  }

}
