import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-profile-teacher',
  templateUrl: './profile-teacher.component.html',
  styleUrls: ['./profile-teacher.component.scss']
})
export class ProfileTeacherComponent implements OnInit {
  courses$: ['Курс 1', 'Задание 2', 'Задание 3', 'Задание 4', 'Задание 5'];
  exercises$: ['Курс 1', 'Задание 2', 'Задание 3', 'Задание 4', 'Задание 5'];
  competence$: ['Курс 1', 'Задание 2', 'Задание 3', 'Задание 4', 'Задание 5'];
  competence2$: ['Курс 1', 'Задание 2', 'Задание 3', 'Задание 4', 'Задание 5'];
  competence3$: ['Курс 1', 'Задание 2', 'Задание 3', 'Задание 4', 'Задание 5'];
  backgroundColorToggle = '#000000';
  colorToggle = '#000000';

  constructor() { }

  ngOnInit(): void {
  }

}
