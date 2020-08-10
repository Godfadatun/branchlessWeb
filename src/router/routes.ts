import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'main',component: () => import('pages/Index.vue') },
      { path: 'envoy', name: 'envoy',component: () => import('pages/Index.vue') },
      { path: 'microbanking', name: 'microbanking',component: () => import('pages/Index.vue') },
      { path: 'contact', name: 'contact',component: () => import('pages/Contact.vue') },
      { path: 'faq', name: 'faq',component: () => import('pages/FAQ.vue') },
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  });
}

export default routes;
