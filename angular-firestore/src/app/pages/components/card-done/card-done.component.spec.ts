import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDoneComponent } from './card-done.component';

describe('CardDoneComponent', () => {
  let component: CardDoneComponent;
  let fixture: ComponentFixture<CardDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
