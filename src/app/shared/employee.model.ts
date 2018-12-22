export class Employee {

  private _id: number;
  private _phone: string;
  private _email: string;
  private _username: string;
  private _roles: any;


  constructor(id: number, phone: string, email: string, username: string, roles: any) {
    this._id = id;
    this._phone = phone;
    this._email = email;
    this._username = username;
    this._roles = roles;
  }

  get id(): number {
    return this._id;
  }

  get phone(): string {
    return this._phone;
  }

  get email(): string {
    return this._email;
  }

  get username(): string {
    return this._username;
  }

  get roles(): any {
    return this._roles;
  }
}
