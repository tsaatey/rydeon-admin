export class ApiService {

  private _log_in: string;
  private _signup: string;
  private _current_user: string;
  private _addCar: string;
  private _user_role: string;
  private _assign_role: string;
  private _create_user: string;


  private localhost: string = 'http://localhost:5000';
  private remotehost: string;

  constructor() {
    this._log_in = this.localhost + '/auth/login';
    this._signup = this.localhost + '/resources/rydeon/signup';
    this._current_user = this.localhost + '/api/rydeon/person/details';
    this._addCar = this.localhost + '/api/rydeon/car';
    this._user_role = this.localhost + '/admin/auth/role/all';
    this._assign_role = this.localhost + '/admin/auth/userrole';
    this._create_user = this.localhost + 'admin/rydeon/create/employee/account';
  }


  get log_in(): string {
    return this._log_in;
  }

  get signup(): string {
    return this._signup;
  }

  get current_user(): string {
    return this._current_user;
  }

  get addCar(): string {
    return this._addCar;
  }

  get user_role(): string {
    return this._user_role;
  }

  get assign_role(): string {
    return this._assign_role;
  }

  get create_user(): string {
    return this._create_user;
  }
}
