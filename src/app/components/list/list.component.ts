import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  // @Input() typesOfData: string[];
  typesOfData: string[] = ['Задание 1', 'Задание 2', 'Задание 3', 'Задание 4', 'Задание 5'];
  clicked = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleBtn() {
    this.clicked = !this.clicked;
    return this.clicked;
  }

}
