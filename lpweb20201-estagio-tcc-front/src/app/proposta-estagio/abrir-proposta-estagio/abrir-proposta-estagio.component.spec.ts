import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrirPropostaEstagioComponent } from './abrir-proposta-estagio.component';

describe('AbrirPropostaEstagioComponent', () => {
  let component: AbrirPropostaEstagioComponent;
  let fixture: ComponentFixture<AbrirPropostaEstagioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbrirPropostaEstagioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbrirPropostaEstagioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
