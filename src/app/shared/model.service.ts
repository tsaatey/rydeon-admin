import {Injectable} from "@angular/core";
import {Model} from "./model.model";

@Injectable()
export class ModelService {

  private models: Model[] = [
    new Model(1, 'Corolla', 1),
    new Model(1, 'Camry', 1)
  ];

  getModels() {
    return this.models.slice();
  }
}
