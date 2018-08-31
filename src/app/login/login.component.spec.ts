import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../core/angular-material.module';
import { AuthServices } from '../core/auth/auth-service';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModel } from '../login/login-model';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let auth: AuthServices;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        ReactiveFormsModule,
        AngularMaterialModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      providers: [
        AuthServices
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    auth = new AuthServices();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Valid User credentials', () => {
    const loginUser: LoginModel = {email: 'test@test.com', password: 'test1234'};
    expect(auth.validateUserDetails(loginUser)).toBeTruthy();
  });

  it('Invalid User credentials', () => {
    const loginUser: LoginModel = {email: 'test@test.com', password: 'test123'};
    expect(auth.validateUserDetails(loginUser)).toBeFalsy();
  });

});
