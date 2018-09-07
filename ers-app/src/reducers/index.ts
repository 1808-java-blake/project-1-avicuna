import { combineReducers } from "redux";
import { signInReducer } from "./sign-in.reducer";
import {pendingReimbsReducer} from "./pending-reimbs.reducer";
import {processedReimbsReducer} from "./processed-reimbs.reducer";
import {createReimbReducer} from "./create-reimb.reducer";


export interface ISignInState {
    credentials: {
        password: string,
        username: string
    },
    errorMessage: string
}

export interface IPendingReimbsState {
    userId: number,
    reimbs: any[] | null
}

export interface IProcessedReimbsState {
    userId: number,
    reimbs: any[] | null
}

export interface ICreateReimbState {
    reimbursement: {
        reimbAmount: number,
        reimbSubmitted: string
        reimbDescription: string,
        reimbAuthor: number,
        reimbTypeId: number,
    }
}

export interface IState {
    createReimb: ICreateReimbState,
    signIn: ISignInState,
    pendingReimbs: IPendingReimbsState,
    processedReimbs: IProcessedReimbsState,
}

export const state = combineReducers<IState>({
    createReimb: createReimbReducer,
    pendingReimbs: pendingReimbsReducer,
    processedReimbs: processedReimbsReducer,
    signIn: signInReducer,
})