import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageContractsComponent } from './manage-contracts.component';

describe('ManageContractsComponent', () => {
  let component: ManageContractsComponent;
  let fixture: ComponentFixture<ManageContractsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageContractsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
