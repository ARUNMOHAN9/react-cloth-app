import { USER_ACTION } from './user-action.enum';
import { IUserState, IUserAction } from './user-reducer.interface';

const INITIAL_STATE = {
    currentUser: null
}

const UserReducer = (currentState: IUserState = INITIAL_STATE, action: IUserAction): IUserState => {

    const { type, payload } = action;

    switch (type) {
        case USER_ACTION.SET_CURRENT_USER:
            return {
                ...currentState,
                currentUser: payload?.currentUser || null
            }

        default:
            return currentState;
    }
}

export default UserReducer;