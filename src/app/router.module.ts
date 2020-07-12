import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostComponent } from './post/post.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { Exo2GitHubFollowersComponent } from './exo2-git-hub-followers/exo2-git-hub-followers.component';
import { Exo1SrarComponent } from './exo1-srar/exo1-srar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


     const routs:Routes=[
    {
      path:'home',
      component:HomePageComponent
    },
    {
      path:'star',
      component:Exo1SrarComponent
    },
    {
      path:'followers',
      component:Exo2GitHubFollowersComponent
    },
    {
      path:'follower/:idUser',
      component:UserInfoComponent
    },
    {
      path:'posts',
      component:PostComponent
    },
    {
      path:'**',
      component:PageNotFoundComponent
    }
  ]
@NgModule({
  imports: [
    RouterModule.forRoot(routs)
  ],
  exports:[RouterModule]
})
export class RouteModule { }
