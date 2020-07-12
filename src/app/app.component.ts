import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post={
    title:"prct",
    isFavorit:true
  };
  
  fnc(fav:any){
    console.log("star changed to:"+fav);
  }

 // title = 'project';
}
