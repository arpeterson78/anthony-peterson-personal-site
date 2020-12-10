import { Component, OnInit } from '@angular/core';
import { faUserCircle, faChartBar, faHome, faGamepad } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  faUserCircle = faUserCircle;
  faChartBar = faChartBar;
  faHome = faHome;
  faGamepad = faGamepad;

  constructor() { }

  ngOnInit(): void {
  }

}
