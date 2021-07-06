import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from './components/landing/landing.component'
import {AboutUsComponent} from './components/about-us/about-us.component'
import {SegurosComponent} from './components/seguros/seguros.component'
import {AgentesComponent} from './components/agentes/agentes.component'
import {WorkUsComponent} from './components/work-us/work-us.component'

const routes: Routes = [ 
  { path: '', component: LandingComponent },
  { path: 'AboutUs', component: AboutUsComponent },
  { path: 'Seguros', component: SegurosComponent },
  { path: 'Agentes', component: AgentesComponent },
  { path: 'WorkUs', component: WorkUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
