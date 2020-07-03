import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPropostaEstagioComponent } from './editar-proposta-estagio.component';

describe('EditarPropostaEstagioComponent', () => {
  let component: EditarPropostaEstagioComponent;
  let fixture: ComponentFixture<EditarPropostaEstagioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPropostaEstagioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPropostaEstagioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
