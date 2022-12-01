import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEtudiantsComponent } from './manage-etudiants.component';

describe('ManageEtudiantsComponent', () => {
  let component: ManageEtudiantsComponent;
  let fixture: ComponentFixture<ManageEtudiantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageEtudiantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageEtudiantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
