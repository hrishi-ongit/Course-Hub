import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularListComponent } from './popular-list.component';

describe('PopularListComponent', () => {
  let component: PopularListComponent;
  let fixture: ComponentFixture<PopularListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularListComponent]
    });
    fixture = TestBed.createComponent(PopularListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
