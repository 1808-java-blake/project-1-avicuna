import {createReimbTypes} from "./create-reimb.types";

export const updateAmount = (reimbAmount: number) => {
    return {
        payload: {
            reimbAmount
        },
        type: createReimbTypes.UPDATE_AMOUNT
    }
}

export const updateSubmitted = (reimbSubmitted: number) => {
    return {
        payload: {
            reimbSubmitted
        },
        type: createReimbTypes.UPDATE_SUBMITTED
    }
}

export const updateDescription = (reimbDescription: string) => {
    return {
        payload: {
            reimbDescription
        },
        type: createReimbTypes.UPDATE_DESCRIPTION
    }
}

export const updateAuthor = (reimbAuthor: number) => {
    return {
        payload: {
            reimbAuthor
        },
        type: createReimbTypes.UPDATE_AUTHOR
    }
}

export const updateTypeId = (reimbTypeId: number) => {
    return {
        payload: {
            reimbTypeId
        },
        type: createReimbTypes.UPDATE_TYPE_ID
    }
}
