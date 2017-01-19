import {IContactsResponseInterceptor} from './contacts.response.interceptor.i';
import {IContact} from '../../models/contact.i';
import * as express from 'express';

class ContactsResponseInterceptor implements IContactsResponseInterceptor {
  response(req: express.Request, res: express.Response, data: IContact[]): void {
    switch (req.method) {
      case 'GET':
        res.jsonp({'contacts': data});
        break;
      default:
        res.jsonp(data);
    }
  }
}
export {ContactsResponseInterceptor};
