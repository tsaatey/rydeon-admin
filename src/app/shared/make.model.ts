export class Make {
  private _id: number;
  private _make: string;

  constructor(id: number, make: string) {
    this._id = id;
    this._make = make;
  }

  get id(): number {
    return this._id;
  }

  get make(): string {
    return this._make;
  }
}
