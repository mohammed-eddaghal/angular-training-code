import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
ajout(){

  /**
   * navigate fiha 2 params
   *  lawal: dyal les ségements
   *  tani : dyal les querys 
   */
  this.route.navigate(['follower',5],
  {
    queryParams:{id:55,type:'User'}
  })
}
}
