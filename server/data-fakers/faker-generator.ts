import {IContact} from '../models/contact.i';
import {ICountry} from '../models/country.i';
import {IFaker, IFakerResult, IFakerGenerator} from './faker.i';

class FakerGenerator implements IFakerGenerator {

    constructor(private ContactFaker: IFaker<IContact>,
                private CountryFaker: IFaker<ICountry>) {
    }

    private generateFakers<T>(faker: IFaker<T>, quantity?: number): T[] {
        return faker.generate(quantity);
    }


    get(): IFakerResult {
        let contacts: IContact[] = this.generateFakers<IContact>(this.ContactFaker, 10);
        let countries: ICountry[] = this.generateFakers<ICountry>(this.CountryFaker);
        return {
            contacts: contacts,
            countries: countries
        }
    }
}

export {FakerGenerator};
