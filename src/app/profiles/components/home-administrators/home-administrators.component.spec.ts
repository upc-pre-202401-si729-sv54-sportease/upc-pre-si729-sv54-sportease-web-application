import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdministratorsComponent } from './home-administrators.component';

describe('HomeAdministratorsComponent', () => {
  let component: HomeAdministratorsComponent;
  let fixture: ComponentFixture<HomeAdministratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeAdministratorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeAdministratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
