import { Component, OnInit } from '@angular/core';
import { faStar,faBars,faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-work-us',
  templateUrl: './work-us.component.html',
  styleUrls: ['./work-us.component.scss']
})
export class WorkUsComponent implements OnInit {
  faStar = faStar;
  faBars = faBars;
  faMapMarkedAlt = faMapMarkedAlt;
  faPhone = faPhone;
  constructor() { }

  ngOnInit(): void {
  }

}
