import {IProcessedReimbsState} from "./index";
import {processedReimbsTypes} from "../actions/processed-reimbs/processed-reimbs.types";

const initialState: IProcessedReimbsState = {
    reimbs: null,
    userId: 0
}

export const processedReimbsReducer = (state = initialState, action: any) => {
    switch (action.type) {
    case processedReimbsTypes.UPDATE_ID:
        return {
            ...state,
            userId: action.payload.userId
        }
    case processedReimbsTypes.PROCESSED_REIMBS:
        return {
            ...state,
            reimbs: action.payload.reimbs
        }
    }
    return state;
}