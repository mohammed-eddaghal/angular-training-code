import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exo1-srar',
  templateUrl: './exo1-srar.component.html',
  styleUrls: ['./exo1-srar.component.css']
})
export class Exo1SrarComponent implements OnInit {
  //alias "is-like" pour edentifier le parametre du balise de component dans les autres compenent du modul
  //a l'aide d'alias on peut changer le nom de variable ms le nom de paramettre du balise reste le même d'alias
  @Input("is-like") isFavorit = true;





  //@Output() pour cree un tage comme (click) qui fait un appel
  //on done a ce Output() un nom
  //ce nom et une instance de EventEmitter();
  //ce type a une function s'appele "emit()" pour dire a le tage de componenct d'utiliser Output()

  //n9ado ndiro alias f7al f Input
  @Output('chang') chang1 = new EventEmitter();

  isTxt = "empty";
  constructor() { }
  fnc() {
    this.isTxt = (this.isFavorit) ? "empty" : "full";
    this.isFavorit = !this.isFavorit;
    //on le met dans tous les function pour appeler la methode donnée dans la balise
    this.chang1.emit(this.isFavorit);

  }
  /**
   * ex de functionnement du Output()
   * une button qui contien (click)="fnc1()"
   * bghina mli nbarko 3la button alors execution du balise d component f app.component.html ndiro fiha
   * (change)="fnc2()"
   * alors
   * *kndiro f component @output() nom=new EventEmitter();
   * *o f fnc1(){}kn3ito l this.nom.emit();
   * ***o ftage d balise kndiro (nom)='fnc2()'
  */


  /**
   * ila dawazna f emit() argumment alors 5as f function li drna f nafs tag d nom d Output()
   * o f balise d component f tag d Output() 5as n3tiw comme arg l fnc $event
   */
  ngOnInit(): void {
  }

}
