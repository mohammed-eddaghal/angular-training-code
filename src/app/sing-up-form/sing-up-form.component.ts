import { userNameValidator } from './userName.validator';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'app-sing-up-form',
  templateUrl: './sing-up-form.component.html',
  styleUrls: ['./sing-up-form.component.css']
})
export class SingUpFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
form=new FormGroup({
                        //valeur par défaut, les functions appliquer surl'input[soit une seul fnct,
                      // ola tableau des fnct ila 7tajina bzf]
  userName:new FormControl('',[
                                Validators.required,
                                userNameValidator.cannotContainSpace
                              ]),
  passeword:new FormControl('',Validators.required)
  
})

 
}
