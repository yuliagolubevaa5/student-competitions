import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list6',
  templateUrl: './list6.component.html',
  styleUrls: ['./list6.component.css']
})
export class List6Component implements OnInit {
  typesOfData: string[] = ['1 курс', '2 курс', '3 курс', '4 курс'];
  clicked = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleBtn() {
    this.clicked = !this.clicked;
    return this.clicked;
  }

}
