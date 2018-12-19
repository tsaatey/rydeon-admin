export class User {

  private _id: number;
  private _firstname: string;
  private _lastname: string;
  private _middlename: string;
  private _gender: string;
  private _phone: string;
  private _email: string;
  private _role: string;
  private _image: string;

  constructor(id: number, firstname: string, lastname: string, gender: string, phone: string, email: string, role: string, middlename?: string, image?: string) {
    this._id = id;
    this._firstname = firstname;
    this._lastname = lastname;
    this._middlename = middlename;
    this._gender = gender;
    this._phone = phone;
    this._email = email;
    this._role = role;
    this._image = image;
  }

  get id(): number {
    return this._id;
  }

  get firstname(): string {
    return this._firstname;
  }

  get lastname(): string {
    return this._lastname;
  }

  get middlename(): string {
    return this._middlename;
  }

  get gender(): string {
    return this._gender;
  }


  get phone(): string {
    return this._phone;
  }

  get email(): string {
    return this._email;
  }

  get role(): string {
    return this._role;
  }
}
