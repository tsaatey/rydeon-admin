import { Component, OnInit } from '@angular/core';
import {SubscriberService} from "../../../shared/subscriber.service";
import {Subscriber} from "../../../shared/subsriber.model";

@Component({
  selector: 'ngx-suspend-user',
  templateUrl: './suspend-user.component.html',
  styleUrls: ['./suspend-user.component.scss']
})
export class SuspendUserComponent implements OnInit {
  subscribers: Subscriber[];
  suspendButtonText: string[] = [];
  blockButtonText: string[] = [];
  buttonDisabled: boolean[] = [];
  status: string[] = [];
  sub: any;

  constructor(private subscriberService: SubscriberService) {
    this.subscribers = this.subscriberService.getSubscribers();
    this.populateUsersTablePropertyArrays();
  }

  ngOnInit() {

  }
  populateUsersTablePropertyArrays() {
    for (let i = 0; i < this.subscribers.length; i++) {
      this.sub = this.subscribers[i];
      if (this.sub.accountStatus === 'suspended') {
        this.status.push('Suspended');
        this.suspendButtonText.push('Activate');
        this.blockButtonText.push('Block');
        this.buttonDisabled.push(false);
      } else if (this.sub.accountStatus === 'blocked') {
        this.suspendButtonText.push('Blocked');
        this.blockButtonText.push('Blocked');
        this.buttonDisabled.push(true);
        this.status.push('Blocked');
      } else {
        this.suspendButtonText.push('Suspend');
        this.blockButtonText.push('Block');
        this.buttonDisabled.push(false);
        this.status.push('Active');
      }
    }
  }

  suspendOrActivateUserAccount(userId: number, operation: string) {
    if (operation === 'Activate') {
      console.log('User with ID ' + userId + ' is activated!');
    }

    if (operation === 'Suspend') {
      console.log('User with ID ' + userId + ' is suspended!');
    }
  }

  blockUser(userId: number) {
    console.log('User with ID ' + userId + ' is blocked!');
  }

}
