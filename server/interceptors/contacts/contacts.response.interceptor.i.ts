import {IContact} from '../../models/contact.i';
import * as express from 'express';

interface IContactsResponseInterceptor {
    response(req: express.Request, res: express.Response, data: IContact[]);
}

export {IContactsResponseInterceptor};
