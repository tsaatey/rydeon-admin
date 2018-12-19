import {Injectable} from "@angular/core";
import {Make} from "./make.model";

@Injectable()
export class MakeService {
  private makes: Make[] = [
    new Make(1, 'Toyota'),
    new Make(2, 'Benz'),
    new Make(3, 'Thundra'),
    new Make(4, 'Hyundai'),
    new Make(4, 'Kia'),
  ];

  getMakes() {
    return this.makes.slice();
  }
}
