import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

import {ContainerComponent} from '@coreui/angular';
import {RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  standalone: true,
  styleUrls: ['./default-layout.component.scss'],
  imports: [
    ContainerComponent,
    RouterOutlet
  ]
})
export class DefaultLayoutComponent implements OnInit {


  vars = {'cui-sidebar-nav-group-items-padding-x': 2};

  constructor() {

  }

  // this.navItems = getNavItems(languageService.translate);


  ngOnInit() {

  }


}
