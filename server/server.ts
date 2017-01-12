import {IFakerResult} from './data-fakers/faker.i';
import {IConfig} from '../config/config.i';
import * as express from 'express';
import  {IServer} from './server.i';
import {developConfig} from '../config/develop.config';
import {ContactsResponseInterceptor} from './interceptors/contacts/contacts.response.interceptor';

let jsonServer = require('json-server');
let path = require('path');
let environment: IConfig = developConfig;

class Server implements IServer {
    private contactsResponseInterceptor: ContactsResponseInterceptor;
    private server: any;
    private router: any;

    constructor(private data: IFakerResult) {
        this.contactsResponseInterceptor = new ContactsResponseInterceptor();
        this.server = jsonServer.create();
        this.router = jsonServer.router(data);
        this.router.render = this.renderCustom.bind(this);
        this.server.use(jsonServer.defaults());
        this.server.use(this.router);
    }


    private renderCustom(req: express.Request, res: express.Response): void {
        let data: any = res.locals.data;
        let url: string = req.url;
        if (url === '/contacts') {
            this.contactsResponseInterceptor.response(req, res, data);
        } else {
            res.jsonp(data);
        }
    }

    start(): void {
        this.server.listen(environment.port, function () {
            console.log('JSON Server is running on http://localhost:' + environment.port);
        });
    }
}

export {Server};
