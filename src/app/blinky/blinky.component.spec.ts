import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlinkyComponent } from './blinky.component';

describe('BlinkyComponent', () => {
  let component: BlinkyComponent;
  let fixture: ComponentFixture<BlinkyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlinkyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlinkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
