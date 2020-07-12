import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalis-pipe',
  templateUrl: './personalis-pipe.component.html',
  styleUrls: ['./personalis-pipe.component.css']
})
export class PersonalisPipeComponent implements OnInit {
  isLike : boolean;
  isTxt="empty";
  constructor() { 
    this.isLike=false;
  }
  fnc(){
    this.isTxt=(this.isLike)? "empty":"full";
    this.isLike=(this.isLike)? false:true;
    
  }
  body="hello world, je suis flan kanbghikom o kantmana aaanannajnaa";
  ngOnInit(): void {
  }

}
