import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWidloComponent } from './page-widlo.component';

describe('PageWidloComponent', () => {
  let component: PageWidloComponent;
  let fixture: ComponentFixture<PageWidloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageWidloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageWidloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
