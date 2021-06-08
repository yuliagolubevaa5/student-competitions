import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import * as rootStore from '../app/core/store/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'student-competitions';

  constructor(
    private router: Router,
    private store: Store<rootStore.ICompetenceState>
  ) {

  }

}
