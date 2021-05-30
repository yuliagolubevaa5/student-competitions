import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelManagerCompetencyComponent } from './panel-manager-competency.component';

describe('PanelManagerCompetencyComponent', () => {
  let component: PanelManagerCompetencyComponent;
  let fixture: ComponentFixture<PanelManagerCompetencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelManagerCompetencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelManagerCompetencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
