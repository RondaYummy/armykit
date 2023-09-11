import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'dashboard', component: () => import('pages/dashboard/DashboardPage.vue') },
      { path: '/modules/active', name: 'modules_active', component: () => import('pages/modules/ActiveModulePage.vue') },
      { path: '/modules/db1000n', name: 'modules_db1000n', component: () => import('pages/modules/db100nPage.vue') },
      { path: '/modules/mhddosproxy', name: 'modules_mhddosproxy', component: () => import('pages/modules/mhddosproxyPage.vue') },
      { path: '/modules/distress', name: 'modules_distress', component: () => import('pages/modules/distressPage.vue') },
      { path: '/settings', name: 'settings', component: () => import('pages/SettingsPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
