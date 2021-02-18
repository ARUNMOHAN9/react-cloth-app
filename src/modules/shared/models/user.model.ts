import { IUser } from '../interfaces/user.interface';

export class User implements IUser {
    displayName = '';
    email = '';
    id = '';
    createdAt = {
        seconds: 0,
        nanoseconds: 0
    }

    constructor(user: IUser) {
        this.displayName = user.displayName;
        this.email = user.email;
        this.id = user.id;
        this.createdAt = user.createdAt;
    }
}
