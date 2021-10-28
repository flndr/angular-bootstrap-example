import { UserGroup } from 'src/app/models/UserGroup';

export interface User {
    firstname : string;
    lastname : string;
    groups : UserGroup[];
}
