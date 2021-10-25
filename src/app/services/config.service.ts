import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface ConfigModel {
    backendUrl : string;
}

const defaultConfig : ConfigModel = {
    backendUrl : '/'
}

@Injectable( {
    providedIn : 'root'
} )
export class ConfigService {
    
    private _config : ConfigModel = defaultConfig;
    
    constructor( private http : HttpClient ) {
        console.log( 'ConfigService constructed' );
    }
    
    get config() : ConfigModel {
        return this._config;
    }
    
    async load() {
        try {
            this._config = await this.http.get<ConfigModel>( 'config.json' ).toPromise();
            console.log( 'Config loaded', this._config );
        } catch ( e ) {
            throw e;
        }
    }
}
