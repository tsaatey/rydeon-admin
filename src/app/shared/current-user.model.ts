import {Injectable} from "@angular/core";


@Injectable()
export class CurrentUser {

  private _id: number;
  private _firstname: string;
  private _lastname: string;
  private _othernames: string;
  private _gender: string;
  private _phone: string;
  private _email: string;
  private _role: string;
  private _image: string;
  private _digitalAddress: string;

  constructor(){}


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get firstname(): string {
    return this._firstname;
  }

  set firstname(value: string) {
    this._firstname = value;
  }

  get lastname(): string {
    return this._lastname;
  }

  set lastname(value: string) {
    this._lastname = value;
  }

  get othernames(): string {
    return this._othernames;
  }

  set othernames(value: string) {
    this._othernames = value;
  }

  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get role(): string {
    return this._role;
  }

  set role(value: string) {
    this._role = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }


  get digitalAddress(): string {
    return this._digitalAddress;
  }

  set digitalAddress(value: string) {
    this._digitalAddress = value;
  }
}
