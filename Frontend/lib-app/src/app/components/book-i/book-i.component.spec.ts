import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookIComponent } from './book-i.component';

describe('BookIComponent', () => {
  let component: BookIComponent;
  let fixture: ComponentFixture<BookIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
