import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDoingComponent } from './card-doing.component';

describe('CardDoingComponent', () => {
  let component: CardDoingComponent;
  let fixture: ComponentFixture<CardDoingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDoingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
