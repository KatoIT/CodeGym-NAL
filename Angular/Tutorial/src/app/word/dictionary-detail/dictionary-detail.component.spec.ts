import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryDetailComponent } from './dictionary-detail.component';

describe('DictionayDetailComponentComponent', () => {
  let component: DictionaryDetailComponent;
  let fixture: ComponentFixture<DictionaryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictionaryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
