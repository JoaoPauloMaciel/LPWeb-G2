import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarProostaEstagioComponent } from './cadastrar-proosta-estagio.component';

describe('CadastrarProostaEstagioComponent', () => {
  let component: CadastrarProostaEstagioComponent;
  let fixture: ComponentFixture<CadastrarProostaEstagioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarProostaEstagioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarProostaEstagioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
