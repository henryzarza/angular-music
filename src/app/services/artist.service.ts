import { DataService } from './data-service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ArtistService extends DataService {

    constructor(http: Http) {
        super(http);
    }

    getTopArtist(): Promise<Array<Object>> {
        let url = this.urlBase + '?method=chart.gettopartists&limit=' + this.limit + '&page=' + this.page + '&api_key=' + this.apikey + '&format=json';
        return this.http.get(url)
                    .toPromise()
                    .then(response => {
                        let data = response.json();
                        this.informationResponse = data['artists']['@attr'];
                        return data['artists']['artist'];
                    })
                    .catch(this.handleError);
    }

    doRequest(mbid: string, name_method: string, artist?: string) {
        let url = this.urlBase + '?method=artist.'+ name_method +'&api_key=' + this.apikey + '&mbid=' + mbid + '&format=json';
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