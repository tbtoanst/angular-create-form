import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./user.reducer";

export const selectUserState = createFeatureSelector<State>('user');

export const selectUser =  createSelector(
    selectUserState,
    (state) => state.user
)
