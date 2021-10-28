import { Injectable } from '@angular/core';
import { action }     from 'mobx';
import { computed }   from 'mobx';
import { observable } from 'mobx';
import { User }       from 'src/app/models/User';
import { UserGroup }  from 'src/app/models/UserGroup';

const defaultUser : User = {
    firstname : 'Guest',
    lastname  : 'Guest',
    groups    : []
}

@Injectable( {
    providedIn : 'root'
} )
export class UserStore {
    
    @observable
    private _user : User = defaultUser;
    
    @computed
    get user() : User {
        return this._user;
    }
    
    @action
    setUser( u : User ) {
        this._user = u;
    }
    
    @computed
    get isAuthenticated() : boolean {
        return this.user.groups.length > 0;
    }
    
    @computed
    get isAdmin() : boolean {
        return this.user.groups.includes( UserGroup.ADMIN );
    }
    
    @computed
    get isSuperAdmin() : boolean {
        return this.user.groups.includes( UserGroup.SUPER_ADMIN );
    }
    
    @computed
    get isGuest() : boolean {
        return !this.isAuthenticated;
    }
}
