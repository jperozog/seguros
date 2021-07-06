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

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutUsComponent,
    SegurosComponent,
    AgentesComponent,
    WorkUsComponent
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
