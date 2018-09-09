import {IAllUsersState} from "./index";
import{allUsersTypes} from "../actions/all-users/all-users.types";

const initialState: IAllUsersState = {
    users: null
}

export const allUsersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case allUsersTypes.ALL_USERS:
            return {
                ...state,
                users: action.payload.users
            }
    }
    return state;
}