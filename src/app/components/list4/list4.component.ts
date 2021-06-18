import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list4',
  templateUrl: './list4.component.html',
  styleUrls: ['./list4.component.css']
})
export class List4Component implements OnInit {

  typesOfCourse: string[] = ['Web-программирование', 'Бизнес-планирование IT-проектов ', 'Искусственный интеллект и экспертные системы ', 'Компьютерная безопасность ', 'Методы оптимизации'];
  typesOfTask: string[] = ['Проверка после лекции', 'Лабораторная работа №5 ', 'Лабораторная работа №4 ', 'Лабораторная работа №3', 'Распарсить БД SDO', 'Ваша соц сеть', 'БД'];
  typesOfCompetence: string[] = ['ОПК', 'ПК', 'УК'];
  typesOfData: string[] = ['ОПК-1', 'ОПК-2', 'ОПК-3', 'ПК-1', 'ПК-2', 'ПК-3', 'УК-1', 'УК-2', 'УК-3'];
  typesOfCompetenceThree: string[] = ['ОПК-1.1', 'ОПК-1.2', 'ОПК-1.3', 'ПК-1.1', 'ПК-1.2', 'ПК-1.3', 'УК-1.1', 'УК-1.2', 'УК-1.3'];
  clicked = false;

  // Admin

  // typesOfCompetence: string[] = ['ОПК', 'ПК', 'УК'];
  // typesOfCompetenceTwo: string[] = ['ОПК-1', 'ОПК-2', 'ОПК-3', 'ПК-1', 'ПК-2', 'ПК-3', 'УК-1', 'УК-2', 'УК-3'];
  // typesOfCompetenceThree: string[] = ['ОПК-1.1', 'ОПК-1.2', 'ОПК-1.3', 'ПК-1.1', 'ПК-1.2', 'ПК-1.3', 'УК-1.1', 'УК-1.2', 'УК-1.3'];
  typesOfCompetenceManager: string[] = ['Руководитель компетенций 1', 'Руководитель компетенций 2', 'Руководитель компетенций 3'];

  // ManagerCompetency

  // typesOfCourse: string[] = ['Web-программирование', 'Бизнес-планирование IT-проектов ', 'Искусственный интеллект и экспертные системы ', 'Компьютерная безопасность ', 'Моделирование информационных систем'];
  // typesOfCompetence: string[] = ['ОПК', 'ПК', 'УК'];
  // typesOfCompetenceTwo: string[] = ['ОПК-1', 'ОПК-2', 'ОПК-3', 'ПК-1', 'ПК-2', 'ПК-3', 'УК-1', 'УК-2', 'УК-3'];
  // typesOfCompetenceThree: string[] = ['ОПК-1.1', 'ОПК-1.2', 'ОПК-1.3', 'ПК-1.1', 'ПК-1.2', 'ПК-1.3', 'УК-1.1', 'УК-1.2', 'УК-1.3'];
  // typesOfTask: string[] = ['Проверка после лекции', 'Лабораторная работа №5 ', 'Лабораторная работа №4 ', 'Лабораторная работа №3', 'Распарсить БД SDO', 'Ваша соц сеть', 'БД'];
  constructor() { }

  ngOnInit(): void {
  }

  toggleBtn() {
    this.clicked = !this.clicked;
    return this.clicked;
  }

}
