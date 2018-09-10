import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusFeeComponent } from './status-fee.component';

describe('StatusFeeComponent', () => {
  let component: StatusFeeComponent;
  let fixture: ComponentFixture<StatusFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
