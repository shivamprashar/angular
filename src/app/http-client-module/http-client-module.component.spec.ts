import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HTTPCLientModuleComponent } from './http-client-module.component';

describe('HTTPCLientModuleComponent', () => {
  let component: HTTPCLientModuleComponent;
  let fixture: ComponentFixture<HTTPCLientModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HTTPCLientModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HTTPCLientModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
