import { Route } from '@angular/router';


export const appRoutes: Route[] = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  {path: 'login',
  loadComponent: () => import('@office/auth')
    .then(c => c.Login)
  },

  {path: 'feed', loadComponent: () =>
      import('@office/feed').then(c => c.Feed)
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('@office/cart').then(c => c.Cart)
  },
  {path: 'posts', loadComponent: () =>
    import('@office/posts').then(c => c.UserPostsLayout)}
];
