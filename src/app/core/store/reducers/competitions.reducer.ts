import {ICompetence} from '../../models/competence.model';
import {Action, createReducer, on} from '@ngrx/store';
import * as fromActions from '../actions/compeitions.actions'
import {createEntityAdapter, EntityAdapter} from '@ngrx/entity';

export interface IState {
  error: string;
  loading: boolean;
  data: ICompetence;
}
export function selectKpCardId(a: ICompetence): number {
  return a.id;
}

export const adapter: EntityAdapter<ICompetence> = createEntityAdapter<ICompetence>({
  selectId: selectKpCardId
});

export const initialState: IState = adapter.getInitialState( {
  error: null,
  loading: false,
  data: null,
});

const competitionsReducer = createReducer(
  initialState,
  on(fromActions.loadCompetenceById, (state, action) => {
    return { ...state, loading: true };
  }),
  on(fromActions.loadCompetenceByIdSuccess, (state, action) => {
    return { ...state, loading: false, data: action.item };
  }),
  on(fromActions.loadCompetenceByIdFailure, (state, action) => {
    return { ...state, loading: false, error: action.error };
  }),
);

export function reducer(state: IState | undefined, action: Action) {
  return competitionsReducer(state, action);
}
