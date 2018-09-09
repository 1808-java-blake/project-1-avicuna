import {IAllUsersState} from "./index";
import{allUsersTypes} from "../actions/all-users/all-users.types";

const initialState: IAllUsersState = {
    users: null,
    reimbs: null,
    userId: 0
}

export const allUsersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case allUsersTypes.ALL_USERS:
            return {
                ...state,
                users: action.payload.users
            }
        case allUsersTypes.UPDATE_ID:
            return {
                ...state,
                userId: action.payload.userId
            }
        case allUsersTypes.PROCESSED_REIMBS:
            return {
                ...state,
                reimbs: action.payload.reimbs
            }
    }
    return state;
}