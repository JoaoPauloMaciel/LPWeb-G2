import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SobreComponent } from './sobre/sobre.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { InicioComponent } from './inicio/inicio.component';
import { HomeInicioComponent } from './home-inicio/home-inicio.component';
import { PropostasDeTCCComponent } from './propostas-de-tcc/propostas-de-tcc.component';
import { PropostaDeTCCComponent } from './proposta-de-tcc/proposta-de-tcc.component';
//JPSM - Proposta de Estagio
import { PropostaEstagioComponent } from './proposta-estagio/proposta-estagio.component';
import { AbrirPropostaEstagioComponent } from './proposta-estagio/abrir-proposta-estagio/abrir-proposta-estagio.component';
import { CadastrarProostaEstagioComponent } from './proposta-estagio/cadastrar-proosta-estagio/cadastrar-proosta-estagio.component';
import { EditarPropostaEstagioComponent } from './proposta-estagio/editar-proposta-estagio/editar-proposta-estagio.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'sobre', component: SobreComponent },
  {
    path: 'inicio', component: InicioComponent, children: [
      { path: 'propostas-de-tcc', component: PropostasDeTCCComponent },
      { path: 'propostas-de-tcc/:id', component: PropostaDeTCCComponent },
      // JPSM - Proposta de Estagio:
      { path: 'propostas-estagio', component: PropostaEstagioComponent },
      { path: 'propostas-estagio/abrir-proposta-estagio', component: AbrirPropostaEstagioComponent },
      { path: 'propostas-estagio/cadastrar-proposta-estagio', component: CadastrarProostaEstagioComponent },
      { path: 'propostas-estagio/editar-proposta-estagio', component: EditarPropostaEstagioComponent },
      // __
      { path: '', component: HomeInicioComponent }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
