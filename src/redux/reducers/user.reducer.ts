import { USER_ACTION } from '../enums/user-action.enum';
import { IUserState, UserAction } from '../interfaces/reducers/user-reducer.interface';

const INITIAL_STATE = {
    currentUser: null
}

const UserReducer = (currentState: IUserState = INITIAL_STATE, action: UserAction): IUserState => {

    const { type, payload } = action;

    switch (type) {
        case USER_ACTION.SET_CURRENT_USER:
            return {
                ...currentState,
                currentUser: payload.currentUser
            }

        default:
            return currentState;
    }
}

export default UserReducer;