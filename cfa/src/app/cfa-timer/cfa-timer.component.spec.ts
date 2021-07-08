import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfaTimerComponent } from './cfa-timer.component';

describe('CfaTimerComponent', () => {
  let component: CfaTimerComponent;
  let fixture: ComponentFixture<CfaTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfaTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CfaTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
