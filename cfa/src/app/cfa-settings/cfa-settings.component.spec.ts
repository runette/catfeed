import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfaSettingsComponent } from './cfa-settings.component';

describe('CfaSettingsComponent', () => {
  let component: CfaSettingsComponent;
  let fixture: ComponentFixture<CfaSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfaSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CfaSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
