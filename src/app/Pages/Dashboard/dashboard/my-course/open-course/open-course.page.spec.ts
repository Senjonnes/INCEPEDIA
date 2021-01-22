import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OpenCoursePage } from './open-course.page';

describe('OpenCoursePage', () => {
  let component: OpenCoursePage;
  let fixture: ComponentFixture<OpenCoursePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenCoursePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OpenCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
