import { Component, OnInit } from '@angular/core';
import { faStar,faBars,faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  faStar = faStar;
  faBars = faBars;
  faMapMarkedAlt = faMapMarkedAlt;
  faPhone = faPhone;
  constructor() { }

  ngOnInit(): void {
  }

}
