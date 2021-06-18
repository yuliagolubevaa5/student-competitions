import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-manager-competency',
  templateUrl: './panel-manager-competency.component.html',
  styleUrls: ['./panel-manager-competency.component.scss']
})
export class PanelManagerCompetencyComponent implements OnInit {
  courses$: ['Курс 1', 'Задание 2', 'Задание 3', 'Задание 4', 'Задание 5'];
  exercises$: ['Курс 1', 'Задание 2', 'Задание 3', 'Задание 4', 'Задание 5'];
  competence$: ['Курс 1', 'Задание 2', 'Задание 3', 'Задание 4', 'Задание 5'];
  competence2$: ['Курс 1', 'Задание 2', 'Задание 3', 'Задание 4', 'Задание 5'];
  competence3$: ['Курс 1', 'Задание 2', 'Задание 3', 'Задание 4', 'Задание 5'];

  constructor() { }

  ngOnInit(): void {
  }

}
