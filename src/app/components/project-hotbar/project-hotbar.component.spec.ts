import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectHotbarComponent } from './project-hotbar.component';

describe('ProjectHotbarComponent', () => {
  let component: ProjectHotbarComponent;
  let fixture: ComponentFixture<ProjectHotbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectHotbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectHotbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
