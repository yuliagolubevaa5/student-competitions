import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list7',
  templateUrl: './list7.component.html',
  styleUrls: ['./list7.component.css']
})
export class List7Component implements OnInit {

  typesOfData: string[] = ['17-ВТбо-1', '20-ИС-2',];
  clicked = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleBtn() {
    this.clicked = !this.clicked;
    return this.clicked;
  }

}
