import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo2GitHubFollowersComponent } from './exo2-git-hub-followers.component';

describe('Exo2GitHubFollowersComponent', () => {
  let component: Exo2GitHubFollowersComponent;
  let fixture: ComponentFixture<Exo2GitHubFollowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exo2GitHubFollowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exo2GitHubFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
