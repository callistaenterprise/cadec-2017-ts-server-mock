import {FakerGenerator} from './data-fakers/faker-generator';
import {CountryFaker} from './data-fakers/country.faker';
import {ContactFaker} from './data-fakers/contact.faker';
import {IFaker, IFakerGenerator} from './data-fakers/faker.i';
import {IContact} from './models/contact.i';
import {ICountry} from './models/country.i';
import {Server} from './server';

class Index {
  private static contactFaker: IFaker<IContact> = new ContactFaker();
  private static countryFaker: IFaker<ICountry> = new CountryFaker();

  static start() {
    let fakerGenerator: IFakerGenerator = new FakerGenerator(this.contactFaker, this.countryFaker);
    let server: any = new Server(fakerGenerator.get());
    server.start();
  }
}

Index.start();
