import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list9',
  templateUrl: './list9.component.html',
  styleUrls: ['./list9.component.css']
})
export class List9Component implements OnInit {

  typesOfData: string[] = ['Зубенко Михаил Петрович', 'Аванасьев Евгений Иванович', 'Иванова Анна Ивановна'];
  clicked = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleBtn() {
    this.clicked = !this.clicked;
    return this.clicked;
  }

}
