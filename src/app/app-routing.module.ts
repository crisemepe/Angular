import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EventoEditComponent } from './eventos/evento-edit/evento-edit.component';
import { EventosDetalleComponent } from './eventos/eventos-detalle/eventos-detalle.component';
import { EventosListComponent } from './eventos/eventos-list/eventos-list.component';
import { NuevoEventoComponent } from './eventos/nuevo-evento/nuevo-evento.component';
import { AuthGuard } from './usuarios/auth.guard';
import { PerfilComponent } from './usuarios/perfil/perfil.component';
import { UsuariosGraficaComponent } from './usuarios/usuarios-grafica/usuarios-grafica.component';
import { UsuariosListComponent } from './usuarios/usuarios-list/usuarios-list.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'eventos', canActivate: [AuthGuard], component: EventosListComponent},
  {path: 'usuarios', canActivate: [AuthGuard], component: UsuariosListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'evento/:id', component: EventosDetalleComponent},
  {path: 'grafica', component: UsuariosGraficaComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'evento/edit/:id', canActivate:[AuthGuard], component:EventoEditComponent},
  {path: 'eventos/nuevo', canActivate:[AuthGuard], component: NuevoEventoComponent},
  {path: '**', pathMatch: 'full', redirectTo:'home'} //el path cuando el usuario se equivoca, osea de cualquier cosa error

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
