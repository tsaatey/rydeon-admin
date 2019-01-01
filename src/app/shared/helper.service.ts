import {Injectable} from "@angular/core";

@Injectable()
export class HelperService {
  message: any;
  immediateUser: any;

  public getImage(base64EncodedImage): any {
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

  public getAvatar() {
    return '../../../assets/images/avatar-head.png';
  }

  public hasValidExtension(extension: any) {
    let extensions = new Set(['jpg', 'png']);
    if (extensions.has(extension.toLowerCase())) {
      return true;
    }
    return false;
  }

}
