import {
  createRouter,
  createWebHistory,
  RouteParams,
  RouteRecordRaw,
} from 'vue-router'

export type AppRouteNames =
  | 'global-feed'
  | 'my-feed'
  | 'tag'
  | 'article'
  | 'create-article'
  | 'edit-article'
  | 'login'
  | 'register'
  | 'profile'
  | 'profile-favorites'
  | 'settings'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/shared/layout/default.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/pages/home/index.vue'),
      },
      // {
      //   path: 'my-feed',
      //   name: 'home-my-feed',
      //   component: () => import('@/pages/HomeMyFeed'),
      // },
      // {
      //   path: 'tag/:tag',
      //   name: 'home-tag',
      //   component: () => import('@/pages/HomeTag'),
      // },
    ],
  },
  // {
  //   name: 'login',
  //   path: '/login',
  //   component: () => import('@/pages/login/index.vue'),
  // },
  // {
  //   name: 'register',
  //   path: '/register',
  //   component: () => import('@/pages/register/index.vue'),
  // },
  // {
  //   name: 'settings',
  //   path: '/settings',
  //   component: () => import('@/pages/settings/index.vue'),
  // },
  // Handle child routes with a default, by giving the name to the
  // child.
  // SO: https://github.com/vuejs/vue-router/issues/777
  {
    name: 'profile',
    path: '/profile/:username',
    component: () => import('./pages/profile/index.vue'),
  },
  {
    name: 'profile-favorites',
    path: '/profile/:username/favorites',
    component: () => import('./pages/profile/index.vue'),
  },
  {
    name: 'article',
    path: '/article/:slug',
    component: () => import('./pages/article/index.vue'),
  },
  {
    name: 'edit-article',
    path: '/article/:slug/edit',
    component: () => import('./pages/editor/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export function routerPush(
  name: AppRouteNames,
  params?: RouteParams
): ReturnType<typeof router.push> {
  if (params !== undefined) {
    return router.push({
      name,
      params,
    })
  } else {
    return router.push({ name })
  }
}

export default router
