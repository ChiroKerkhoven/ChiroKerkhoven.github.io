import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnzeGroepenComponent } from './onze-groepen.component';

describe('OnzeGroepenComponent', () => {
  let component: OnzeGroepenComponent;
  let fixture: ComponentFixture<OnzeGroepenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnzeGroepenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnzeGroepenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
