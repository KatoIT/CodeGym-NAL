import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCoreComponent } from './demo-core.component';

describe('DemoCoreComponent', () => {
  let component: DemoCoreComponent;
  let fixture: ComponentFixture<DemoCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
