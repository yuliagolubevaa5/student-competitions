import {Injectable} from '@angular/core';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {CompetitionsService} from '../../services/competitions.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import * as fromActions from '../actions/compeitions.actions';

@Injectable()
export class CompetitionsEffects {

  LoadList$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadCompetenceById),
      mergeMap((action: any) => {
          return action.id ? this.service.getCompetenceById(action.id)
            .pipe(
              map((data: any) => {
                return fromActions.loadCompetenceByIdSuccess({item: data});
              }),
              catchError((error: any) => {
                return of(fromActions.loadCompetenceByIdFailure({
                  error: error.error ? error.error.message
                    : `Произошла ошибка. Код ошибки: ${error.status}. Повторите попытку или обратитесь к администратору`
                }));
              })
            ) : of(fromActions.loadCompetenceByIdSuccess({item: this.addCp()}));
        }
      )
    )
  );

  addCp() {
    return {
      id: null,
      rating: null,
      taskid: '',
      userid: '',
      email: '',
      login: '',
    };
  }

  constructor(
    private actions$: Actions,
    private service: CompetitionsService
  ) {
  }
}
