import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangePasswordAdminPage } from './change-password-admin.page';

describe('ChangePasswordAdminPage', () => {
  let component: ChangePasswordAdminPage;
  let fixture: ComponentFixture<ChangePasswordAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
