import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCurriculoComponent } from './criar-curriculo.component';

describe('CriarCurriculoComponent', () => {
  let component: CriarCurriculoComponent;
  let fixture: ComponentFixture<CriarCurriculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarCurriculoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriarCurriculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
