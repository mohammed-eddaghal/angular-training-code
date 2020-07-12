import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventKeyUpComponent } from './event-key-up.component';

describe('EventKeyUpComponent', () => {
  let component: EventKeyUpComponent;
  let fixture: ComponentFixture<EventKeyUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventKeyUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventKeyUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
