import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list8',
  templateUrl: './list8.component.html',
  styleUrls: ['./list8.component.css']
})
export class List8Component implements OnInit {

  typesOfData: string[] = ['Голубева Юлия', 'Болотова Ксюша Михайловна', 'Иванов Иван Иванович', 'Петров Пётр Петрович'];
  clicked = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleBtn() {
    this.clicked = !this.clicked;
    return this.clicked;
  }

}
