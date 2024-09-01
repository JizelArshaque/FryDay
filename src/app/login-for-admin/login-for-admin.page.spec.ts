import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginForAdminPage } from './login-for-admin.page';

describe('LoginForAdminPage', () => {
  let component: LoginForAdminPage;
  let fixture: ComponentFixture<LoginForAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginForAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
