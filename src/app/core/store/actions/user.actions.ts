import {createAction, props} from '@ngrx/store';
import {IUser} from '../../models/user.model';

export const loadUserById = createAction('[Student Profile] Load User',
  props<{ id: string }>());

export const loadUserByIdSuccess = createAction('[Student Profile] Load Competence Success',
  props<{ item: IUser }>());

export const loadUserByIdFailure = createAction('[Student Profile] Load Competence Failure',
  props<{ error: string }>());
