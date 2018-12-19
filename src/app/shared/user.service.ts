
import {Injectable} from "@angular/core";
import {User} from "./user.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class User2Service {

  constructor(private httpClient: HttpClient) {}
  private users: User[] = [
    new User(
      1,
      'Richard',
      'Tsaatey',
      'Male',
      '0249640111',
      'tsaatey@gmail.com',
      'Admin',
    ),
    new User(
      2,
      'Ezekiel',
      'Ahuakli',
      'Male',
      '0249640111',
      'zekes@gmail.com',
      'User',
      'Teye'
    ),
    new User(
      3,
      'Safia',
      'Wyanet',
      'Female',
      '0240247086',
      'safia_nn@gmail.com',
      'User',
    ),
  ];

  getUsers() {
    return this.users.slice();
  }

  findUser(data: string){
    return this.users[data];
  }

}
