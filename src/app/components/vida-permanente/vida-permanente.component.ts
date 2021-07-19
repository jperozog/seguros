import { Component, OnInit } from '@angular/core';
import { faStar,faBars,faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vida-permanente',
  templateUrl: './vida-permanente.component.html',
  styleUrls: ['./vida-permanente.component.scss']
})
export class VidaPermanenteComponent implements OnInit {

  constructor() { }
  resolucion: any
  faStar = faStar;
  faBars = faBars;
  faMapMarkedAlt = faMapMarkedAlt;
  faPhone = faPhone;
  ngOnInit(): void {
  }

}
