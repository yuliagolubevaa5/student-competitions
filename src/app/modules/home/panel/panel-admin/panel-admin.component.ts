import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.scss']
})
export class PanelAdminComponent implements OnInit {
  courses$: ['Курс 1', 'Задание 2', 'Задание 3', 'Задание 4', 'Задание 5'];
  manager$: ['Курс 1', 'Задание 2', 'Задание 3', 'Задание 4', 'Задание 5'];
  competence$: ['Курс 1', 'Задание 2', 'Задание 3', 'Задание 4', 'Задание 5'];
  competence2$: ['Курс 1', 'Задание 2', 'Задание 3', 'Задание 4', 'Задание 5'];
  competence3$: ['Курс 1', 'Задание 2', 'Задание 3', 'Задание 4', 'Задание 5'];

  constructor() { }

  ngOnInit(): void {
  }

}
