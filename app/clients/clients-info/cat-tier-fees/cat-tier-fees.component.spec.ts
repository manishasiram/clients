import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatTierFeesComponent } from './cat-tier-fees.component';

describe('CatTierFeesComponent', () => {
  let component: CatTierFeesComponent;
  let fixture: ComponentFixture<CatTierFeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatTierFeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatTierFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
