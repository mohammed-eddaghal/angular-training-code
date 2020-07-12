import { RouteModule } from './router.module';
import { DataService } from './services/data.service';
import { PostService } from './services/post.service';
import { GitHubFollowers } from './services/githubFollowers.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventKeyUpComponent } from './event-key-up/event-key-up.component';
import { TemplateVariableComponent } from './template-variable/template-variable.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { PersonalisPipeComponent } from './personalis-pipe/personalis-pipe.component';
import { ResumePipePipe } from './resume-pipe.pipe';
import { Exo1SrarComponent } from './exo1-srar/exo1-srar.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchCaseComponent } from './ng-switch-case/ng-switch-case.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { SafeTraversalComponent } from './safe-traversal/safe-traversal.component';
import { PropreDirectiveDirective } from './propre-directive.directive';
import { UsePropreDerictiveComponent } from './use-propre-derictive/use-propre-derictive.component';
import { FormulairComponent } from './formulair/formulair.component';
import { SingUpFormComponent } from './sing-up-form/sing-up-form.component';
import { PostComponent } from './post/post.component';
import { Exo2GitHubFollowersComponent } from './exo2-git-hub-followers/exo2-git-hub-followers.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    EventKeyUpComponent,
    TemplateVariableComponent,
    DataBindingComponent,
    PipesComponent,
    PersonalisPipeComponent,
    ResumePipePipe,
    Exo1SrarComponent,
    NgIfComponent,
    NgSwitchCaseComponent,
    NgForComponent,
    SafeTraversalComponent,
    PropreDirectiveDirective,
    UsePropreDerictiveComponent,
    FormulairComponent,
    SingUpFormComponent,
    PostComponent,
    Exo2GitHubFollowersComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouteModule
  ],
  providers: [PostService,DataService,GitHubFollowers],
  bootstrap: [AppComponent]
})
export class AppModule { }
