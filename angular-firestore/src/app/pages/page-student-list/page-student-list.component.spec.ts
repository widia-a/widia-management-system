import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStudentListComponent } from './page-student-list.component';

describe('PageStudentListComponent', () => {
  let component: PageStudentListComponent;
  let fixture: ComponentFixture<PageStudentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageStudentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
