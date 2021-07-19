import { Component, OnInit } from '@angular/core';
import { faStar,faBars,faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-indexado',
  templateUrl: './indexado.component.html',
  styleUrls: ['./indexado.component.scss']
})
export class IndexadoComponent implements OnInit {

  constructor() { }
  resolucion: any
  faStar = faStar;
  faBars = faBars;
  faMapMarkedAlt = faMapMarkedAlt;
  faPhone = faPhone;
  ngOnInit(): void {
  }

}
