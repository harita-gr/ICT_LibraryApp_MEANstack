import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorIComponent } from './author-i.component';

describe('AuthorIComponent', () => {
  let component: AuthorIComponent;
  let fixture: ComponentFixture<AuthorIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
