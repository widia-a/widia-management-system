import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidloNavbarComponent } from './widlo-navbar.component';

describe('WidloNavbarComponent', () => {
  let component: WidloNavbarComponent;
  let fixture: ComponentFixture<WidloNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidloNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidloNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
