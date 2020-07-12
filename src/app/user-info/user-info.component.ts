import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  id:number
  id2:number
  type:string
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    /**
     * n9ado n5admo wa7d option d snapshot kathnina mn dik la methode d subscribe(...)
     * 
     * kat3ti nafs resultat o de plus la methode d snapshot optimisé f code
     * 
     * n9ado snapshot n5admoh ta f queryparam
     */

    this.id=+this.route.snapshot.paramMap.get('idUser')
    /*
    had code li hna nafso li lfo9
    this.route.paramMap.subscribe(
      param=>{
        //la methode get('') return un string alors bach nrado l valeur li bghina l int kanzido + f depart
        this.id=+param.get('idUser')
        console.log(param.get('idUser'))
      }
    )*/

    this.route.queryParamMap.subscribe(
      param=>{
        this.id2=+param.get('id')
        this.type=param.get('type')
      }
    )

  }

}
