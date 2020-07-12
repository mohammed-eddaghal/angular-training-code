import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairComponent } from './formulair.component';

describe('FormulairComponent', () => {
  let component: FormulairComponent;
  let fixture: ComponentFixture<FormulairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
