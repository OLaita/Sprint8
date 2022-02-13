import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSSComponent } from './view-ss.component';

describe('ViewSSComponent', () => {
  let component: ViewSSComponent;
  let fixture: ComponentFixture<ViewSSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
