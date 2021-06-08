import {Component, OnDestroy, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {select, Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import * as fromModuleStore from '../../../../core/store/reducers';
import * as fromActions from '../../../../core/store/actions/compeitions.actions';
import {Observable, Subject} from 'rxjs';
import {ICompetence} from '../../../../core/models/competence.model';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProfileStudentComponent implements OnInit, OnDestroy {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['Номер', 'Задание', 'Компетенция'];
  expandedElement: PeriodicElement | null;
  loading$: Observable<boolean>;
  id;
  competence: ICompetence;
  // competence: ICompetence[] = [];
  private unsubscribe = new Subject<boolean>();

  constructor(
    private router: Router,
    private store: Store<fromModuleStore.ICompetenceState>,
  ) {
    this.subscribeEvents();
    console.log(this.competence);
    this.store.dispatch(fromActions.loadCompetenceById({id: '5'}));
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(true);
    this.unsubscribe.complete();
    }

  ngOnInit(): void {
  }

  private subscribeEvents() {
    this.loading$ = this.store.pipe(takeUntil(this.unsubscribe), select(fromModuleStore.getCompetenceLoading));
    this.store.pipe(takeUntil(this.unsubscribe), select(fromModuleStore.getCompetence))
      .subscribe(item => {
        if (item) {
          this.competence = item;
          console.log(this.competence);
        }
      });
  }

}

export interface PeriodicElement {
  Задание: string;
  Номер: number;
  Компетенция: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    Номер: 1,
    Задание: 'Наименование задания',
    Компетенция: 'Аббревиатура компетенции',
    description: `Описание задания и связанной/связанными с ним копетенцией/компетенциями`
  }, {
    Номер: 2,
    Задание: 'Наименование задания',
    Компетенция: 'Аббревиатура компетенции',
    description: `Описание задания и связанной/связанными с ним копетенцией/компетенциями`
  }, {
    Номер: 3,
    Задание: 'Наименование задания',
    Компетенция: 'Аббревиатура компетенции',
    description: `Описание задания и связанной/связанными с ним копетенцией/компетенциями`
  }, {
    Номер: 4,
    Задание: 'Наименование задания',
    Компетенция: 'Аббревиатура компетенции',
    description: `Описание задания и связанной/связанными с ним копетенцией/компетенциями`
  }, {
    Номер: 5,
    Задание: 'Наименование задания',
    Компетенция: 'Аббревиатура компетенции',
    description: `Описание задания и связанной/связанными с ним копетенцией/компетенциями`
  }, {
    Номер: 6,
    Задание: 'Наименование задания',
    Компетенция: 'Аббревиатура компетенции',
    description: `Описание задания и связанной/связанными с ним копетенцией/компетенциями`
  },
];
