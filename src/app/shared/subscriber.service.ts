import {Injectable} from "@angular/core";
import {Subscriber} from "./subsriber.model";

@Injectable()
export class SubscriberService {
  private subscribers: Subscriber[] = [
    new Subscriber(1, 'Kofi Ghana', '0246338901', 'active'),
    new Subscriber(2, 'Richard Tsaatey', '0249640111', 'suspended'),
    new Subscriber(3, 'Ama Dede', '0242555784', 'blocked'),
    new Subscriber(4, 'Comfort Dede', '0246517868', 'active'),
    new Subscriber(5, 'Elikem Theodore', '0242724203', 'blocked')
  ];

  getSubscribers() {
    return this.subscribers.slice();
  }
}
