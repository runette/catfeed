import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfaDetailsComponent } from './cfa-details.component';

describe('CfaDetailsComponent', () => {
  let component: CfaDetailsComponent;
  let fixture: ComponentFixture<CfaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CfaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
