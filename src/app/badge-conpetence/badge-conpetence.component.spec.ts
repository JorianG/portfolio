import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeConpetenceComponent } from './badge-conpetence.component';

describe('BadgeConpetenceComponent', () => {
  let component: BadgeConpetenceComponent;
  let fixture: ComponentFixture<BadgeConpetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeConpetenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeConpetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
