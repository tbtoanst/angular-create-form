import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "src/app/core/services/user/user.service";
import { catchError, of, exhaustMap, map, tap } from 'rxjs';
import * as AuthActions from './user.actions'

@Injectable()
export class UserEffects{

  constructor(
    private actions$: Actions,
    private router: Router,
    private authService: AuthService
  ) { }

  loginRequest$ = createEffect(() =>
    {console.log('Run effect')
    return this.actions$.pipe(
      ofType(AuthActions.createRequest),
      exhaustMap((action) =>
        this.authService.create( action.data ).pipe(
          map((createSuccessResponse) => {
            return AuthActions.createSuccess({ createSuccessResponse })}),
          catchError((error) => of(AuthActions.createFailure({error})))
        )
      )
    )}
  );

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.createSuccess),
      tap(() => {
        this.router.navigateByUrl('/');
      })
    ),
      { dispatch: false }
  );
}
