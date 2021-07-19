import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SegurosComponent } from './components/seguros/seguros.component';
import { AgentesComponent } from './components/agentes/agentes.component';
import { WorkUsComponent } from './components/work-us/work-us.component';
import { BeneficiosComponent } from './components/beneficios/beneficios.component';
import { VidaTerminoComponent } from './components/vida-termino/vida-termino.component';
import { VidaPermanenteComponent } from './components/vida-permanente/vida-permanente.component';
import { IndexadoComponent } from './components/indexado/indexado.component';
import { PrearregloComponent } from './components/prearreglo/prearreglo.component';
import { CotizarComponent } from './components/cotizar/cotizar.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutUsComponent,
    SegurosComponent,
    AgentesComponent,
    WorkUsComponent,
    BeneficiosComponent,
    VidaTerminoComponent,
    VidaPermanenteComponent,
    IndexadoComponent,
    PrearregloComponent,
    CotizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
