import {Injectable} from "@angular/core";
import {Year} from "./year.model";

@Injectable()
export class YearService {

  private years: Year[] = [
    new Year(2010, 2010),
    new Year(2011, 2011),
    new Year(2012, 2012),
    new Year(2013, 2013),
    new Year(2014, 2014),
    new Year(2015, 2015),
    new Year(2016, 2016),
    new Year(2017, 2017),
    new Year(2018, 2018),
    new Year(2019, 2019),
    new Year(2020, 2020),
    new Year(2021, 2021),
    new Year(2022, 2022),
    new Year(2023, 2023),
    new Year(2024, 2024),
    new Year(2025, 2025),
    new Year(2026, 2026),
    new Year(2027, 2027),
    new Year(2028, 2028),
    new Year(2029, 2029),
    new Year(2030, 2030),
    new Year(2031, 2031),
    new Year(2032, 2032),
    new Year(2033, 2033),
  ];

  getYears() {
    return this.years.slice();
  }
}
