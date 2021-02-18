import { USER_ACTION } from '../../enums/user-action.enum';

export interface IUserState {
    currentUser: any;
}

export interface UserAction {
    type: USER_ACTION;
    payload: Partial<IUserState>
}
