import { Component, OnInit } from '@angular/core';
import { faStar,faBars,faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seguros',
  templateUrl: './seguros.component.html',
  styleUrls: ['./seguros.component.scss']
})
export class SegurosComponent implements OnInit {
  resolucion: any
  faStar = faStar;
  faBars = faBars;
  faMapMarkedAlt = faMapMarkedAlt;
  faPhone = faPhone;
  constructor() { }

  ngOnInit(): void {
  
  }

}
