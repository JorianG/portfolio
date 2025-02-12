import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkCompetenceComponent } from './link-competence.component';

describe('LinkCompetenceComponent', () => {
  let component: LinkCompetenceComponent;
  let fixture: ComponentFixture<LinkCompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkCompetenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
