import { NotFoundError } from './../commen/not-found-error';
import { AppError } from './../commen/app-error';

import { PostService } from './../services/post.service';

import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post = {
    id: 0,
    title: '',
    body: '',
    userId: 1
  }
  vad: any[] = []
  x: any
  tst = true
  form = false
  btn = true
  constructor(private postService: PostService) {
    /*
    //c'est pas le bon pratique idar f7al had code f constructeur hadchi 5aso idar f ngOnInit
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      //this.http.get('api/heroes')
      .subscribe((respons: any[]) => {
        //this.var=JSON.parse(JSON.stringify(respons));
        this.vad = respons
        //console.log(this.vad)
      })*/

  }

  affForm() {
    this.tst = false;
    this.form = true;
  }

  formPost = new FormGroup({
    title: new FormControl(''),
    body: new FormControl('')
  });

  addPost() {
    this.postService.postFnc(this.post)
      .subscribe(responce => {
        this.x = responce
        this.post.id = this.x.id
        this.vad.push(this.post)
        this.post = {
          id: 0,
          title: '',
          body: '',
          userId: 1
        }
        this.tst = true;
        this.form = false;
      }, error => {
        alert(error.message)
      })
  }

  edit(pst) {
    this.tst = false;
    this.form = true;
    this.btn = false
    this.post = pst

  }
  editer() {
    this.postService.putFnc(this.post)
      .subscribe(resopns => {
        console.log(this.post)
        this.btn = true
        this.post = {
          id: 0,
          title: '',
          body: '',
          userId: 1
        }
        this.tst = true;
        this.form = false;
      }, error => {
        alert(error.message)
      })
  }

  supp(v) {
    let index = this.vad.indexOf(v);
    //let index=123
    
      this.postService.deleteFnc(index)
        .subscribe(response => {

          this.vad.splice(index, 1)
          console.log(index)
          this.tst = true;
          this.form = false;
          console.log(response)
        }, (error:AppError) => {
          if (error instanceof NotFoundError) {
            alert("l'element n'existe pas!!!")
            //console.log(error)
          } else {
            alert("erreur unexpected!!!!")
          }
        })
  }

  fetchPost() {
    this.postService.getFnc()
      .subscribe((respons: any[]) => {
        this.vad = respons
      }, error => {
        alert(error.message)
        console.log(error)
      })
  }
  ngOnInit(): void {
    this.fetchPost()
  }

}
