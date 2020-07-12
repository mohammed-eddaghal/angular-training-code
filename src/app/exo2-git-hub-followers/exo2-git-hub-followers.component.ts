import { GitHubFollowers } from './../services/githubFollowers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo2-git-hub-followers',
  templateUrl: './exo2-git-hub-followers.component.html',
  styleUrls: ['./exo2-git-hub-followers.component.css']
})
export class Exo2GitHubFollowersComponent implements OnInit {

  followers:any[]=[]
  constructor(private gitHubFollowers:GitHubFollowers) { }


  select(){
    this.gitHubFollowers.getFnc().subscribe(
      (response:any[])=>{
        this.followers=response
        console.log(response)
      }
    )
  }
  ngOnInit(): void {
    this.select()
  }

}
