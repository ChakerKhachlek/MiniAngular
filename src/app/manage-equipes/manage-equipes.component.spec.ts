import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEquipesComponent } from './manage-equipes.component';

describe('ManageEquipesComponent', () => {
  let component: ManageEquipesComponent;
  let fixture: ComponentFixture<ManageEquipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageEquipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageEquipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
