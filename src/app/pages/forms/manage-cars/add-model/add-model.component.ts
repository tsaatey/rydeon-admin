import { Component, OnInit } from '@angular/core';
import {MakeService} from "../../../../shared/make.service";

@Component({
  selector: 'ngx-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.scss']
})
export class AddModelComponent implements OnInit {

  makes: any;

  constructor(private makeService: MakeService) {
    this.makes = this.makeService.getMakes();
  }

  ngOnInit() {
  }

}
