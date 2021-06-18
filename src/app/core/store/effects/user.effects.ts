import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as fromActions from '../actions/user.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {UserService} from '../../services/user.service';

@Injectable()
export class CompetitionsEffects {

  LoadList$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadUserById),
      mergeMap((action: any) => {
          return action.id ? this.service.getUserById(action.id)
            .pipe(
              map((data: any) => {
                return fromActions.loadUserByIdSuccess({item: data});
              }),
              catchError((error: any) => {
                return of(fromActions.loadUserByIdFailure({
                  error: error.error ? error.error.message
                    : `Произошла ошибка. Код ошибки: ${error.status}. Повторите попытку или обратитесь к администратору`
                }));
              })
            ) : of(fromActions.loadUserByIdSuccess({item: this.addCp()}));
        }
      )
    )
  );

  addCp() {
    return {
      id: '',
      email: '',
      userid: '',
      password: '',
      role: '',
      surname: '',
      name: '',
      patronymic: '',
    };
  }

  constructor(
    private actions$: Actions,
    private service: UserService
  ) {
  }
}
