import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safe-traversal',
  templateUrl: './safe-traversal.component.html',
  styleUrls: ['./safe-traversal.component.css']
})
export class SafeTraversalComponent implements OnInit {

  constructor() { }
  person1={
    nom:'mohammed',
    prenom:'eddaghal',
    address:{
      ville:'sala al jadida',
      codePostal:11100
    }
  };
  person2={
    nom:'mohammed',
    prenom:'eddaghal',
    address:null
  };
  person3={
    nom:'mohammed',
    prenom:'eddaghal',
    address:{ville:'rabat',codePostal:12300}
  };
  persons=[this.person1,this.person2,this.person3];
  ngOnInit(): void {
  }

}
