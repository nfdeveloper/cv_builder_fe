import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPreVisualizarCurriculoComponent } from './modal-pre-visualizar-curriculo.component';

describe('ModalPreVisualizarCurriculoComponent', () => {
  let component: ModalPreVisualizarCurriculoComponent;
  let fixture: ComponentFixture<ModalPreVisualizarCurriculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalPreVisualizarCurriculoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalPreVisualizarCurriculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
