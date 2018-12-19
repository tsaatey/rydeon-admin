export class Subscriber {
  private _userId: number;
  private _name: string;
  private _phone: string;
  private _accountStatus: string;

  constructor(userId: number, name: string, phone: string, accountStatus: string) {
    this._userId = userId;
    this._name = name;
    this._phone = phone;
    this._accountStatus = accountStatus;
  }

  get name(){
    return this._name;
  }

  get phone() {
    return this._phone;
  }
  get accountStatus() {
    return this._accountStatus;
  }

  get userId() {
    return this._userId;
  }

}
