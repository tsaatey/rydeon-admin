import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/Rx";

@Injectable()
export class HelperService {
  message: any;

  public getImage(base64EncodedImage) {
    return 'data:image/png;base64,' + base64EncodedImage;
  }

  private checkPassword(password: string) {
    const regularExpression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return regularExpression.test(password);
  }

  public validatePassword(password: string): boolean {
    if (this.checkPassword(password)) {
      return true;
    }
    return false;
  }

  public passwordMatch(password: string, confirmedPassword: string): boolean {
    if (password == confirmedPassword) {
      return true;
    }
    return false;
  }

}
