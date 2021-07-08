import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfaMainComponent } from './cfa-main.component';

describe('CfaMainComponent', () => {
  let component: CfaMainComponent;
  let fixture: ComponentFixture<CfaMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfaMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CfaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
