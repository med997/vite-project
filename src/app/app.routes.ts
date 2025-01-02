import {Routes} from '@angular/router';
import {DefaultLayoutComponent} from './containers';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: "full",
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    title: 'home',
    data: {
      title: 'home',
    },
    children: [
      {
        path: 'home',
        component: HomeComponent,
        title: 'home',
      }
    ]
  }

];
