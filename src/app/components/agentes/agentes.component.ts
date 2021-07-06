import { Component, OnInit } from '@angular/core';
import { faStar,faBars,faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-agentes',
  templateUrl: './agentes.component.html',
  styleUrls: ['./agentes.component.scss']
})
export class AgentesComponent implements OnInit {
  faStar = faStar;
  faBars = faBars;
  faMapMarkedAlt = faMapMarkedAlt;
  faPhone = faPhone;
  constructor() { }

  ngOnInit(): void {
  }

}
