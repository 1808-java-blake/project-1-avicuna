import {IPendingReimbsState} from "./index";
import {pendingReimbsTypes} from "../actions/pending-reimbs/pending-reimbs.types";

const initialState: IPendingReimbsState = {
    reimbs: null,
    userId: 0,
}

export const pendingReimbsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case pendingReimbsTypes.UPDATE_ID:
            return {
                ...state,
                userId: action.payload.userId
            }
        case pendingReimbsTypes.ALL_PENDING_REIMBS:
            return {
                ...state,
                reimbs: action.payload.reimbs
            }
        case pendingReimbsTypes.PENDING_REIMBS:
            return {
                ...state,
                reimbs: action.payload.reimbs
            }
    }
    return state;
}