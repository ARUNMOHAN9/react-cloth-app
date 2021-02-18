import { IUser } from '../../../modules/shared/interfaces/user.interface';
import { USER_ACTION } from '../../enums/user-action.enum';

export interface IUserState {
    currentUser: IUser | null;
}

export interface IUserAction {
    type: USER_ACTION;
    payload: Partial<IUserState> | null
}
