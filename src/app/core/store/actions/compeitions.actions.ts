import {ICompetence} from '../../models/competence.model';
import {createAction, props} from '@ngrx/store';

export const loadCompetenceById = createAction('[Student Profile] Load Competence',
  props<{ id: string }>());

export const loadCompetenceByIdSuccess = createAction('[Student Profile] Load Competence Success',
  props<{ item: ICompetence }>());

export const loadCompetenceByIdFailure = createAction('[Student Profile] Load Competence Failure',
  props<{ error: string }>());
