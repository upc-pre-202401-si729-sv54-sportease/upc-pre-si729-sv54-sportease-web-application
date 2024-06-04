import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentManagementStudentsComponent } from './payment-management-students.component';

describe('PaymentManagementStudentsComponent', () => {
  let component: PaymentManagementStudentsComponent;
  let fixture: ComponentFixture<PaymentManagementStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentManagementStudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentManagementStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
