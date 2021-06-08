import * as fromCompetitions from '../reducers/competitions.reducer';
import {ActionReducerMap, createFeatureSelector, createSelector, MetaReducer} from '@ngrx/store';
import {environment} from '../../../../environments/environment';

export interface ICompetenceState {
  competence: fromCompetitions.IState;
}

export const reducers: ActionReducerMap<ICompetenceState> = {
  competence: fromCompetitions.reducer,
};

export const selectCpListModule = createFeatureSelector<ICompetenceState>('CompetenceModule');
export const metaReducers: MetaReducer<ICompetenceState>[] = !environment.production ? [] : [];

//  Состояние данных KpListCardItem
export const selectCompetence = (state: ICompetenceState) => state.competence.data;
export const getCompetence = createSelector(selectCpListModule, selectCompetence);

//  Состояние загрузки KpListCardItem
export const selectCompetenceLoading = (state: ICompetenceState) => state.competence.loading;
export const getCompetenceLoading = createSelector(selectCpListModule, selectCompetenceLoading);
