import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularMaterialModule } from '../../core/angular-material.module';
import { InvoicesComponent } from './invoices.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('InvoicesComponent', () => {
  let component: InvoicesComponent;
  let fixture: ComponentFixture<InvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicesComponent ],
      imports: [AngularMaterialModule, BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
