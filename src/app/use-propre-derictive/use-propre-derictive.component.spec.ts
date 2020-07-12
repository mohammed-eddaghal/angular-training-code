import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsePropreDerictiveComponent } from './use-propre-derictive.component';

describe('UsePropreDerictiveComponent', () => {
  let component: UsePropreDerictiveComponent;
  let fixture: ComponentFixture<UsePropreDerictiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsePropreDerictiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsePropreDerictiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
