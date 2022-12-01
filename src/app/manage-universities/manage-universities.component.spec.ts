import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUniversitiesComponent } from './manage-universities.component';

describe('ManageUniversitiesComponent', () => {
  let component: ManageUniversitiesComponent;
  let fixture: ComponentFixture<ManageUniversitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageUniversitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageUniversitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
