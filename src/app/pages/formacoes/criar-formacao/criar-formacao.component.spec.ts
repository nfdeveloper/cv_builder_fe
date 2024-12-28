import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarFormacaoComponent } from './criar-formacao.component';

describe('CriarFormacaoComponent', () => {
  let component: CriarFormacaoComponent;
  let fixture: ComponentFixture<CriarFormacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarFormacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriarFormacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
