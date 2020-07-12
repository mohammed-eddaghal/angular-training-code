import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  Courses;
  constructor() { }
  loadCourses(){
    this.Courses=[
      {id:1,title:'a'},
      {id:2,title:'b'},
      {id:3,title:'c'},
      {id:4,title:'d'},
      {id:5,title:'e'},
      {id:6,title:'f'}
    ];
  }
  /**
   * la metheode li kn3tiw f trackBy kata5od 2 args
   * lwal hwa index
   * o tani hwa l'objet li katbocli bih ex:  let course of courses
   *                                            --------
  */
  trackCourse(index,course){
    //kandiro tracking b id
    //a7san ndiro chi variable li kil3ab dawr d clé primaire bach ikon unique
    //7it ila l9a dak id ghidoz sinon ra ghi affichih
      return (course)? course.id:undefined;
  }

  removeCourse(index:number) {
    //let index=this.Courses.indexOf(course);
    //supp 1 seul element a partir d'index
    this.Courses.splice(index,1);
    console.log(index);
  }

  ngOnInit(): void {
  }

}
