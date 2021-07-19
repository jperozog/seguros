import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from './components/landing/landing.component'
import {AboutUsComponent} from './components/about-us/about-us.component'
import {SegurosComponent} from './components/seguros/seguros.component'
import {AgentesComponent} from './components/agentes/agentes.component'
import {WorkUsComponent} from './components/work-us/work-us.component'
import {BeneficiosComponent} from './components/beneficios/beneficios.component'
import {VidaTerminoComponent} from './components/vida-termino/vida-termino.component'
import {VidaPermanenteComponent} from './components/vida-permanente/vida-permanente.component'
import {IndexadoComponent} from './components/indexado/indexado.component'
import {PrearregloComponent} from './components/prearreglo/prearreglo.component'
import {CotizarComponent} from './components/cotizar/cotizar.component'

const routes: Routes = [ 
  { path: '', component: LandingComponent },
  { path: 'AboutUs', component: AboutUsComponent },
  { path: 'Seguros', component: SegurosComponent },
  { path: 'Agentes', component: AgentesComponent },
  { path: 'WorkUs', component: WorkUsComponent },
  { path: 'Beneficios', component: BeneficiosComponent },
  { path: 'SeguroVidaTermino', component: VidaTerminoComponent },
  { path: 'SeguroVidaPermanente', component: VidaPermanenteComponent },
  { path: 'SeguroVidaIndexado', component: IndexadoComponent },
  { path: 'Prearreglo', component: PrearregloComponent },
  { path: 'Cotizar', component: CotizarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
