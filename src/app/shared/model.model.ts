export class Model{
  private _id: number;
  private _model_name: string;
  private _make_id: number;

  constructor(id: number, model_name: string, make_id: number) {
    this._id = id;
    this._model_name = model_name;
    this._make_id = make_id;
  }


  get id(): number {
    return this._id;
  }

  get model_name(): string {
    return this._model_name;
  }

  get make_id(): number {
    return this._make_id;
  }
}
