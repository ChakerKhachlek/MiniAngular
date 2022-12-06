import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDepartmentsComponent } from './manage-departments.component';

describe('ManageDepartmentsComponent', () => {
  let component: ManageDepartmentsComponent;
  let fixture: ComponentFixture<ManageDepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageDepartmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
