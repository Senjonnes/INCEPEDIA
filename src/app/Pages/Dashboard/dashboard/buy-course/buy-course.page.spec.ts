import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuyCoursePage } from './buy-course.page';

describe('BuyCoursePage', () => {
  let component: BuyCoursePage;
  let fixture: ComponentFixture<BuyCoursePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyCoursePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuyCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
