import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo1SrarComponent } from './exo1-srar.component';

describe('Exo1SrarComponent', () => {
  let component: Exo1SrarComponent;
  let fixture: ComponentFixture<Exo1SrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exo1SrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exo1SrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
