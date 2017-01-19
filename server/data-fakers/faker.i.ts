import {IContact} from '../models/contact.i';
import {ICountry} from '../models/country.i';

interface IFaker<T> {
  generate(quantity?: number): T[];
}

interface IFakerResult {
  contacts: IContact[];
  countries: ICountry[];
}

interface IFakerGenerator {
  get(): IFakerResult
}

export {IFaker, IFakerResult, IFakerGenerator};
