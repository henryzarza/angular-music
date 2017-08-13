import { Http } from '@angular/http';

export class DataService {

    protected apikey = '70547488e1f54bc8c71cdd8c0b86c05c';
    protected urlBase = 'http://ws.audioscrobbler.com/2.0/';
    protected limit: number = 50;
    protected page: number = 1;
    protected informationResponse: Object;

    constructor(protected http: Http) { }
}