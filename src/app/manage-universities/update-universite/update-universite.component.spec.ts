import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUniversiteComponent } from './update-universite.component';

describe('UpdateUniversiteComponent', () => {
  let component: UpdateUniversiteComponent;
  let fixture: ComponentFixture<UpdateUniversiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUniversiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateUniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
