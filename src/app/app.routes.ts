import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ExperienciasComponent } from './pages/experiencias/experiencias.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { CurriculosComponent } from './pages/curriculos/curriculos.component';
import { CriarComponent } from './pages/experiencias/criar/criar.component';
import { CriarCursoComponent } from './pages/cursos/criar-curso/criar-curso.component';
import { MeuPerfilComponent } from './pages/usuarios/meu-perfil/meu-perfil.component';
import { FormacoesComponent } from './pages/formacoes/formacoes.component';
import { authGuard } from './core/guards/auth.guard';
import { CriarFormacaoComponent } from './pages/formacoes/criar-formacao/criar-formacao.component';
import { CriarCurriculoComponent } from './pages/curriculos/criar-curriculo/criar-curriculo.component';
import { ProjetosComponent } from './pages/experiencias/projetos/projetos.component';
import { CriarProjetoComponent } from './pages/experiencias/projetos/criar-projeto/criar-projeto.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'experiencias', component: ExperienciasComponent, canActivate: [authGuard]},
    { path: 'experiencias-criar', component: CriarComponent, canActivate: [authGuard]},
    { path: 'cursos-criar', component: CriarCursoComponent, canActivate: [authGuard]},
    { path: 'cursos', component: CursosComponent, canActivate: [authGuard]},
    { path: 'curriculos', component: CurriculosComponent, canActivate: [authGuard]},
    { path: 'curriculos-criar', component: CriarCurriculoComponent, canActivate: [authGuard]},
    { path: 'formacoes', component: FormacoesComponent, canActivate: [authGuard]},
    { path: 'formacoes-criar', component: CriarFormacaoComponent, canActivate: [authGuard]},
    { path: 'projetos', component: ProjetosComponent, canActivate: [authGuard]},
    { path: 'projetos-criar', component: CriarProjetoComponent, canActivate: [authGuard]},
    { path: 'meu-perfil', component: MeuPerfilComponent, canActivate: [authGuard]}
];