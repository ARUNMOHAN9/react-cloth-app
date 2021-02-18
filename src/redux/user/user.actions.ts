import { IUser } from '../../modules/shared/interfaces/user.interface';
import { USER_ACTION } from './user-action.enum'
import { IUserAction } from './user-reducer.interface'

export const setCurrentUser = (user: IUser | null): IUserAction => ({
    type: USER_ACTION.SET_CURRENT_USER,
    payload: { currentUser: user }
});
