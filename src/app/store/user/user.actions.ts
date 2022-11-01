import { createAction, props } from "@ngrx/store";
import { IUser } from "src/app/core/models/user.model";

export const createRequest = createAction(
  '[Auth] Create Request',
  props<{ data: { firstName: string; middleName: string; lastName: string } }>()
);

export const createSuccess = createAction(
  '[Auth] Create Success',
  props<{ createSuccessResponse: IUser }>()
);

export const createFailure = createAction(
  '[Auth] Create Failure',
  props<{ error: string }>()
);

