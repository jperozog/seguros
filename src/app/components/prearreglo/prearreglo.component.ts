import { Component, OnInit } from '@angular/core';
import { faStar,faBars,faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-prearreglo',
  templateUrl: './prearreglo.component.html',
  styleUrls: ['./prearreglo.component.scss']
})
export class PrearregloComponent implements OnInit {

  constructor() { }
  resolucion: any
  faStar = faStar;
  faBars = faBars;
  faMapMarkedAlt = faMapMarkedAlt;
  faPhone = faPhone;
  ngOnInit(): void {
  }

}
