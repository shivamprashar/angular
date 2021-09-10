import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesTTComponent } from './observables-tt.component';

describe('ObservablesTTComponent', () => {
  let component: ObservablesTTComponent;
  let fixture: ComponentFixture<ObservablesTTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservablesTTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablesTTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
