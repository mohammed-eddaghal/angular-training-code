import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalisPipeComponent } from './personalis-pipe.component';

describe('PersonalisPipeComponent', () => {
  let component: PersonalisPipeComponent;
  let fixture: ComponentFixture<PersonalisPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalisPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalisPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
