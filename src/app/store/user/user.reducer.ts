import { Action, createReducer, on } from "@ngrx/store";
import { IUser } from "src/app/core/models/user.model";
import { createFailure, createSuccess } from "./user.actions";

export interface State {
    user: IUser;
    loginError?: string;
}

export const initialState: State ={
    user: {
        firstName: '',
        middleName: '',
        lastName:''
    }
};

export const userReducer = createReducer(
    initialState,
    on(createSuccess, (state, {createSuccessResponse}) => {
        return {
            ...state,
            user: createSuccessResponse
        }
    }) ,
    on(createFailure, (state, { error }) => {
        return{
            ...state,
            loginError: error,
            user: {
                firstName: '',
                middleName: '',
                lastName:''
            }
        }
    }),
)
