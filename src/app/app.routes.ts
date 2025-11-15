import { Routes } from '@angular/router';
import { Ch1 }    from '@app/pages/ch1/ch1';
import { Ch2 }    from '@app/pages/ch2/ch2';
import { Ch3 }    from '@app/pages/ch3/ch3';

export const routes: Routes = [
  { path: 'ch1', component: Ch1 },
  { path: 'ch2', component: Ch2, children: [] },
  { path: 'ch3', component: Ch3 }
];
