import { Injectable }  from '@angular/core';
import { Entry }       from 'src/app/models/Entry';
import { User }        from 'src/app/models/User';
import { ConfigStore } from 'src/app/stores/config.store';
import { pause }       from 'src/app/util/pause';

@Injectable( {
    providedIn : 'root'
} )
export class ApiService {
    
    private _token : string | null = null;
    
    constructor( private configService : ConfigStore ) { }
    
    setToken( t : string | null ) {
        this._token = t;
    }
    
    async loadUserDetail( name : string ) : Promise<User> {
        await this.fakeRequest( 'loadUserDetail' );
        return {
            firstname : 'Hans',
            lastname  : 'Werner',
            groups    : []
        };
    }
    
    async loadEntries() : Promise<Array<Entry>> {
        await this.fakeRequest( 'loadEntries', 2000 );
        return [
            { id : 1, title : 'First Entry' },
            { id : 2, title : '2nd Entry' },
            { id : 3, title : 'Third Entry' },
            { id : 4, title : 'Another Entry' },
            { id : 5, title : 'Entry again' },
        ];
    }
    
    async fakeRequest( url : string, timeout ? : number ) {
        console.warn( `Fake Request to "${ this.configService.config.backendUrl }${ url }"` +
                      ` with ${ this._token
                                ? `Token "${ this._token }"`
                                : 'no Token' }.` );
        await pause( timeout || 500 );
    }
    
}
