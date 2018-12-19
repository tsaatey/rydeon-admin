export class Year {

  private _id: number;
  private _year: number;

  constructor(id: number, year: number) {
    this._id = id;
    this._year = year;
  }
  
  get id(): number {
    return this._id;
  }

  get year(): number {
    return this._year;
  }
}
