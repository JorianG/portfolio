import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconLanguageComponent } from './icon-language.component';

describe('IconLanguageComponent', () => {
  let component: IconLanguageComponent;
  let fixture: ComponentFixture<IconLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconLanguageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
