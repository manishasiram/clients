import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCatTierComponent } from './add-cat-tier.component';

describe('AddCatTierComponent', () => {
  let component: AddCatTierComponent;
  let fixture: ComponentFixture<AddCatTierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCatTierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCatTierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
