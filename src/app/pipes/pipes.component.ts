import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }


  email: String = "Me@Gmail.com";
  rate : String ="4.55423";
  prix : number= 998.50;
  date =new Date(2019,10,22);
  fnc(email) {
    console.log(email);
  }
  ngOnInit(): void {
  }

}
