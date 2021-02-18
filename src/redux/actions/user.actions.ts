import { USER_ACTION } from '../enums/user-action.enum'
import { IUserState } from '../interfaces/reducers/user-reducer.interface'

export const setCurrentUser = (user: Partial<IUserState>) => ({
    type: USER_ACTION.SET_CURRENT_USER,
    payload: user
});
