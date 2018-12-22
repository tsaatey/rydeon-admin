import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {User} from "../../../shared/user.model";
import {User2Service} from "../../../shared/user.service";

@Component({
  selector: 'ngx-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  @ViewChild('searchInput') searchInputRef: ElementRef;
  users: User[];

  constructor(private userService: User2Service) {
    // this.users = this.userService.getUsers();
  }

  ngOnInit() {
  }

  searchUser(){
    const data = this.searchInputRef.nativeElement.value;
    // console.log(this.userService.findUser(data));
  }

}
