import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { EventosListComponent } from './eventos/eventos-list/eventos-list.component';
import { EventosItemComponent } from './eventos/eventos-item/eventos-item.component';
import { HomeComponent } from './components/home/home.component';
import { EventosService } from './eventos/eventos.service';
import {HttpClientModule} from '@angular/common/http';
import { EventosDetalleComponent } from './eventos/eventos-detalle/eventos-detalle.component';
import { FiltroEventosPipe } from './eventos/filtro-eventos.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { UsuarioItemComponent } from './usuarios/usuario-item/usuario-item.component';
import { HoverDirective } from './directives/hover.directive';
import { UsuariosListComponent } from './usuarios/usuarios-list/usuarios-list.component';
import { FiltroUsuarioPipe } from './usuarios/filtro-usuario.pipe';
import { UsuariosService } from './usuarios/usuarios.service';
import { UsuariosGraficaComponent } from './usuarios/usuarios-grafica/usuarios-grafica.component';
import { ChartsModule } from 'ng2-charts';
import { TiempoEsperaDirective } from './directives/tiempo-espera.directive';
import { PerfilComponent } from './usuarios/perfil/perfil.component';
import { NuevoEventoComponent } from './eventos/nuevo-evento/nuevo-evento.component';
import { EventoEditComponent } from './eventos/evento-edit/evento-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventosListComponent,
    EventosItemComponent,
    HomeComponent,
    EventosDetalleComponent,
    FiltroEventosPipe,
    LoginComponent,
    UsuarioItemComponent,
    HoverDirective,
    UsuariosListComponent,
    FiltroUsuarioPipe,
    UsuariosGraficaComponent,
    TiempoEsperaDirective,
    PerfilComponent,
    NuevoEventoComponent,
    EventoEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    ReactiveFormsModule

  ],
  providers: [EventosService, UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
