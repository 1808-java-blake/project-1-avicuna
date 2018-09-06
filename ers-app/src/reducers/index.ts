import { combineReducers } from "redux";
import { signInReducer } from "./sign-in.reducer";
import {pendingReimbsReducer} from "./pending-reimbs.reducer";


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

export interface IState {
    signIn: ISignInState,
    pendingReimbs: IPendingReimbsState,
}

export const state = combineReducers<IState>({
    pendingReimbs: pendingReimbsReducer,
    signIn: signInReducer,
})