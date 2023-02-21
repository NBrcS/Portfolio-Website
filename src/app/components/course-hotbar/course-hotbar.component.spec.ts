import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseHotbarComponent } from './course-hotbar.component';

describe('CourseHotbarComponent', () => {
  let component: CourseHotbarComponent;
  let fixture: ComponentFixture<CourseHotbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseHotbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseHotbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
