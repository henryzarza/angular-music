import { DataService } from './data-service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GenderService extends DataService {

    constructor(http: Http) {
        super(http);
    }

    getTopGender(limit: number, page: number): Promise<Array<Object>> {
        let url = this.urlBase + '?method=chart.gettoptags&limit=' + limit + '&page=' + page + '&api_key=' + this.apikey + '&format=json';
        return this.http.get(url)
                    .toPromise()
                    .then(response => response.json())
                    .catch(this.handleError);
    }

    getInfo(artist: string, track: string) {
        let url = this.urlBase + '?method=track.getInfo&api_key=' + this.apikey + '&artist=' + artist + '&track=' + track + '&format=json';
        return this.http.get(url)
                    .toPromise()
                    .then(response => response.json())
                    .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error ocurred in the api', error);
        return Promise.reject(error.message || error);        
    }

}