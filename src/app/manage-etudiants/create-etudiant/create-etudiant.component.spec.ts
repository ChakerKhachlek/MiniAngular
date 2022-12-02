import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEtudiantComponent } from './create-etudiant.component';

describe('CreateEtudiantComponent', () => {
  let component: CreateEtudiantComponent;
  let fixture: ComponentFixture<CreateEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEtudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
