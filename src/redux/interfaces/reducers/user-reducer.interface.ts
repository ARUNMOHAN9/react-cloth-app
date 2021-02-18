import { USER_ACTION } from '../../enums/user-action.enum';

export interface IUserState {
    currentUser: any;
}

export interface IUserAction {
    type: USER_ACTION;
    payload: Partial<IUserState>
}
