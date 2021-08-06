import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineregistrationListComponent } from './onlineregistration-list.component';

describe('OnlineregistrationListComponent', () => {
  let component: OnlineregistrationListComponent;
  let fixture: ComponentFixture<OnlineregistrationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineregistrationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineregistrationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
