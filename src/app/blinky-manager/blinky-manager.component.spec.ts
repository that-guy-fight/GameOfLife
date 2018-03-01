import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlinkyManagerComponent } from './blinky-manager.component';

describe('BlinkyManagerComponent', () => {
  let component: BlinkyManagerComponent;
  let fixture: ComponentFixture<BlinkyManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlinkyManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlinkyManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
