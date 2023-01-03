import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoDetailComponent } from './user-info-detail.component';

describe('UserInfoDetailComponent', () => {
  let component: UserInfoDetailComponent;
  let fixture: ComponentFixture<UserInfoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInfoDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInfoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
