import {IFaker} from './faker.i';
import {IContact} from '../models/contact.i';
import * as faker from 'faker';

class ContactFaker implements IFaker<IContact> {

    generate(quantity?: number): IContact[] {
        const noOfContacts: number = (quantity)? quantity : 10;
        let fakers: IContact[] = [];

        for (let i = 0; i < noOfContacts; i++) {
            const randomFirstName: string = faker.name.firstName();
            const randomLastName: string = faker.name.lastName();
            fakers.push({
                id: faker.random.uuid(),
                firstName: randomFirstName,
                lastName: randomLastName,
                email: faker.internet.email(randomFirstName, randomLastName),
                country: faker.address.country()
            });
        }
        return fakers;
    }
}

export {ContactFaker};
