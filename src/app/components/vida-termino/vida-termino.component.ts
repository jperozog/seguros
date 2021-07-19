import { Component, OnInit } from '@angular/core';
import { faStar,faBars,faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-vida-termino',
  templateUrl: './vida-termino.component.html',
  styleUrls: ['./vida-termino.component.scss']
})
export class VidaTerminoComponent implements OnInit {

  constructor() { }
  resolucion: any
  faStar = faStar;
  faBars = faBars;
  faMapMarkedAlt = faMapMarkedAlt;
  faPhone = faPhone;
  ngOnInit(): void {
  }

}
