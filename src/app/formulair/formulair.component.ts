import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulair',
  templateUrl: './formulair.component.html',
  styleUrls: ['./formulair.component.css']
})
export class FormulairComponent implements OnInit {
  msg:String="";
  groupAge=[
    {
      id:1,
      age:"10>age"
    },
    {
      id:2,
      age:"10<age<30"
    },
    {
      id:3,
      age:"age>30"
    }
  ];

  contact=[{id:1,methode:"SMS"},
           {id:2,methode:"Tele"},
           {id:3,methode:"mail"}
          ];
  constructor() { }
  log(x){
    console.log(x);
  }


  submt(f){
    console.log(f);
    this.msg=f.value.preson.name+"|||"+f.value.preson.prenom;
  }
  ngOnInit(): void {
  }

}
