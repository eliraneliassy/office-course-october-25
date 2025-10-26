import { Route } from '@angular/router';


export const appRoutes: Route[] = [
  { path: '', redirectTo: 'feed', pathMatch: 'full' },
  {path: 'feed', loadComponent: () =>
      import('@office/feed').then(c => c.Feed)
  },
];
