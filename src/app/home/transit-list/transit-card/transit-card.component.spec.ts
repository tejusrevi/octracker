import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitCardComponent } from './transit-card.component';

describe('TransitCardComponent', () => {
  let component: TransitCardComponent;
  let fixture: ComponentFixture<TransitCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransitCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
