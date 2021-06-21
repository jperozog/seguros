import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from './components/landing/landing.component'
import {AboutUsComponent} from './components/about-us/about-us.component'
import {SegurosComponent} from './components/seguros/seguros.component'

const routes: Routes = [ 
  { path: '', component: LandingComponent },
  { path: 'AboutUs', component: AboutUsComponent },
  { path: 'Seguros', component: SegurosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
