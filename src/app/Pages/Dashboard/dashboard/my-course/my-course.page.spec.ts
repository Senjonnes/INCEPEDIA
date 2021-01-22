import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyCoursePage } from './my-course.page';

describe('MyCoursePage', () => {
  let component: MyCoursePage;
  let fixture: ComponentFixture<MyCoursePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCoursePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
