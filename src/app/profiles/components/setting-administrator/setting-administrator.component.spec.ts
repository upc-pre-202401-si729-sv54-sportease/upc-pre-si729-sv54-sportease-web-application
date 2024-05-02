import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingAdministratorComponent } from './setting-administrator.component';

describe('SettingAdministratorComponent', () => {
  let component: SettingAdministratorComponent;
  let fixture: ComponentFixture<SettingAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingAdministratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SettingAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
