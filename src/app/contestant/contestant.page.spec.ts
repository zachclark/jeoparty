import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContestantPage } from './contestant.page';

describe('ContestantPage', () => {
  let component: ContestantPage;
  let fixture: ComponentFixture<ContestantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestantPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContestantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
