import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-key-up',
  templateUrl: './event-key-up.component.html',
  styleUrls: ['./event-key-up.component.css']
})
export class EventKeyUpComponent implements OnInit {
  isFavorit=false;
  constructor() { }
  fnc($event) {

      console.log("affiche");

  }

  ngOnInit(): void {
  }

}
