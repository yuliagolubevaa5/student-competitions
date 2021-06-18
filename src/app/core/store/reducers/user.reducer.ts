import {ICompetence} from '../../models/competence.model';
import {createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import {Action, createReducer, on} from '@ngrx/store';
import * as fromActions from '../actions/user.actions';
import {IUser} from '../../models/user.model';

export interface IState {
  error: string;
  loading: boolean;
  data: IUser;
}
export function selectKpCardId(a: IUser): string {
  return a.id;
}

export const adapter: EntityAdapter<IUser> = createEntityAdapter<IUser>({
  selectId: selectKpCardId
});

export const initialState: IState = adapter.getInitialState( {
  error: null,
  loading: false,
  data: null,
});

const userReducer = createReducer(
  initialState,
  on(fromActions.loadUserById, (state, action) => {
    return { ...state, loading: true };
  }),
  on(fromActions.loadUserByIdSuccess, (state, action) => {
    return { ...state, loading: false, data: action.item };
  }),
  on(fromActions.loadUserByIdFailure, (state, action) => {
    return { ...state, loading: false, error: action.error };
  }),
);

export function reducer(state: IState | undefined, action: Action) {
  return userReducer(state, action);
}
