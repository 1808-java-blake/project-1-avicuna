import {createReimbTypes} from "../actions/create-reimb/create-reimb.types";
import {ICreateReimbState} from "./index";

const initialState: ICreateReimbState = {
    reimbursement: {
        reimbAmount: 0,
        reimbAuthor: 0,
        reimbDescription: '',
        reimbSubmitted: '',
        reimbTypeId: 0,
    }
}

export const createReimbReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case createReimbTypes.UPDATE_AMOUNT:
            return {
                ...state,
                reimbAmount: action.payload.reimbAmount,
            }
        case createReimbTypes.UPDATE_SUBMITTED:
            return {
                ...state,
                reimbSubmitted: action.payload.reimbSubmitted,
            }
        case createReimbTypes.UPDATE_DESCRIPTION:
            return {
                ...state,
                reimbDescription: action.payload.reimbDescription,
            }
        case createReimbTypes.UPDATE_AUTHOR:
            return {
                ...state,
                reimbAuthor: action.payload.reimbAuthor,
            }
        case createReimbTypes.UPDATE_TYPE_ID:
            return {
                ...state,
                reimbTypeId: action.payload.reimbTypeId,
            }
    }

    return state;
}

