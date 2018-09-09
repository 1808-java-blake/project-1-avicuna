import { combineReducers } from "redux";
import { signInReducer } from "./sign-in.reducer";
import {pendingReimbsReducer} from "./pending-reimbs.reducer";
import {processedReimbsReducer} from "./processed-reimbs.reducer";
import {createReimbReducer} from "./create-reimb.reducer";
import {allUsersReducer} from "./all-users.reducer";


export interface ISignInState {
    credentials: {
        password: string,
        username: string
    },
    errorMessage: string
}

export interface IAllUsersState {
    users: any[] | null
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
    allUsers: IAllUsersState,
    createReimb: ICreateReimbState,
    signIn: ISignInState,
    pendingReimbs: IPendingReimbsState,
    processedReimbs: IProcessedReimbsState,
}

export const state = combineReducers<IState>({
    allUsers: allUsersReducer,
    createReimb: createReimbReducer,
    pendingReimbs: pendingReimbsReducer,
    processedReimbs: processedReimbsReducer,
    signIn: signInReducer,
})