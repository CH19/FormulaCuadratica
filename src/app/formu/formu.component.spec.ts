import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuComponent } from './formu.component';

describe('FormuComponent', () => {
  let component: FormuComponent;
  let fixture: ComponentFixture<FormuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormuComponent]
    });
    fixture = TestBed.createComponent(FormuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
