/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as DashboardImport } from './routes/dashboard'
import { Route as LayoutWithAuthImport } from './routes/_layout-withAuth'
import { Route as LayoutNonavImport } from './routes/_layout-nonav'
import { Route as LayoutNoAuthImport } from './routes/_layout-noAuth'
import { Route as LayoutHomeImport } from './routes/_layout-home'
import { Route as LayoutWithAuthSearchImport } from './routes/_layout-withAuth/search'
import { Route as LayoutNoAuthSignupRouteImport } from './routes/_layout-noAuth/signup/route'
import { Route as LayoutNoAuthLoginRouteImport } from './routes/_layout-noAuth/login/route'
import { Route as LayoutHomeHomeRouteImport } from './routes/_layout-home/home/route'
import { Route as LayoutNonavIndexRouteImport } from './routes/_layout-nonav/index/route'
import { Route as LayoutWithAuthUserUsernameImport } from './routes/_layout-withAuth/user/$username'
import { Route as LayoutWithAuthProjectsNewImport } from './routes/_layout-withAuth/projects/new'
import { Route as LayoutWithAuthProjectsProjectidImport } from './routes/_layout-withAuth/projects/$projectid'
import { Route as LayoutWithAuthArticlesNewImport } from './routes/_layout-withAuth/articles/new'
import { Route as LayoutWithAuthArticlesArticleidImport } from './routes/_layout-withAuth/articles/$articleid'
import { Route as LayoutWithAuthUserUsernameEditpasswordImport } from './routes/_layout-withAuth/user_.$username.editpassword'
import { Route as LayoutWithAuthUserUsernameDeleteImport } from './routes/_layout-withAuth/user_.$username.delete'
import { Route as LayoutWithAuthProjectsProjectidEditImport } from './routes/_layout-withAuth/projects_.$projectid.edit'
import { Route as LayoutWithAuthArticlesArticleidLinkImport } from './routes/_layout-withAuth/articles_.$articleid.link'
import { Route as LayoutWithAuthArticlesArticleidEditImport } from './routes/_layout-withAuth/articles_.$articleid.edit'

// Create/Update Routes

const DashboardRoute = DashboardImport.update({
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const LayoutWithAuthRoute = LayoutWithAuthImport.update({
  id: '/_layout-withAuth',
  getParentRoute: () => rootRoute,
} as any)

const LayoutNonavRoute = LayoutNonavImport.update({
  id: '/_layout-nonav',
  getParentRoute: () => rootRoute,
} as any)

const LayoutNoAuthRoute = LayoutNoAuthImport.update({
  id: '/_layout-noAuth',
  getParentRoute: () => rootRoute,
} as any)

const LayoutHomeRoute = LayoutHomeImport.update({
  id: '/_layout-home',
  getParentRoute: () => rootRoute,
} as any)

const LayoutWithAuthSearchRoute = LayoutWithAuthSearchImport.update({
  path: '/search',
  getParentRoute: () => LayoutWithAuthRoute,
} as any)

const LayoutNoAuthSignupRouteRoute = LayoutNoAuthSignupRouteImport.update({
  path: '/signup',
  getParentRoute: () => LayoutNoAuthRoute,
} as any)

const LayoutNoAuthLoginRouteRoute = LayoutNoAuthLoginRouteImport.update({
  path: '/login',
  getParentRoute: () => LayoutNoAuthRoute,
} as any)

const LayoutHomeHomeRouteRoute = LayoutHomeHomeRouteImport.update({
  path: '/home',
  getParentRoute: () => LayoutHomeRoute,
} as any)

const LayoutNonavIndexRouteRoute = LayoutNonavIndexRouteImport.update({
  path: '/',
  getParentRoute: () => LayoutNonavRoute,
} as any)

const LayoutWithAuthUserUsernameRoute = LayoutWithAuthUserUsernameImport.update(
  {
    path: '/user/$username',
    getParentRoute: () => LayoutWithAuthRoute,
  } as any,
)

const LayoutWithAuthProjectsNewRoute = LayoutWithAuthProjectsNewImport.update({
  path: '/projects/new',
  getParentRoute: () => LayoutWithAuthRoute,
} as any)

const LayoutWithAuthProjectsProjectidRoute =
  LayoutWithAuthProjectsProjectidImport.update({
    path: '/projects/$projectid',
    getParentRoute: () => LayoutWithAuthRoute,
  } as any)

const LayoutWithAuthArticlesNewRoute = LayoutWithAuthArticlesNewImport.update({
  path: '/articles/new',
  getParentRoute: () => LayoutWithAuthRoute,
} as any)

const LayoutWithAuthArticlesArticleidRoute =
  LayoutWithAuthArticlesArticleidImport.update({
    path: '/articles/$articleid',
    getParentRoute: () => LayoutWithAuthRoute,
  } as any)

const LayoutWithAuthUserUsernameEditpasswordRoute =
  LayoutWithAuthUserUsernameEditpasswordImport.update({
    path: '/user/$username/editpassword',
    getParentRoute: () => LayoutWithAuthRoute,
  } as any)

const LayoutWithAuthUserUsernameDeleteRoute =
  LayoutWithAuthUserUsernameDeleteImport.update({
    path: '/user/$username/delete',
    getParentRoute: () => LayoutWithAuthRoute,
  } as any)

const LayoutWithAuthProjectsProjectidEditRoute =
  LayoutWithAuthProjectsProjectidEditImport.update({
    path: '/projects/$projectid/edit',
    getParentRoute: () => LayoutWithAuthRoute,
  } as any)

const LayoutWithAuthArticlesArticleidLinkRoute =
  LayoutWithAuthArticlesArticleidLinkImport.update({
    path: '/articles/$articleid/link',
    getParentRoute: () => LayoutWithAuthRoute,
  } as any)

const LayoutWithAuthArticlesArticleidEditRoute =
  LayoutWithAuthArticlesArticleidEditImport.update({
    path: '/articles/$articleid/edit',
    getParentRoute: () => LayoutWithAuthRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layout-home': {
      preLoaderRoute: typeof LayoutHomeImport
      parentRoute: typeof rootRoute
    }
    '/_layout-noAuth': {
      preLoaderRoute: typeof LayoutNoAuthImport
      parentRoute: typeof rootRoute
    }
    '/_layout-nonav': {
      preLoaderRoute: typeof LayoutNonavImport
      parentRoute: typeof rootRoute
    }
    '/_layout-withAuth': {
      preLoaderRoute: typeof LayoutWithAuthImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/_layout-nonav/': {
      preLoaderRoute: typeof LayoutNonavIndexRouteImport
      parentRoute: typeof LayoutNonavImport
    }
    '/_layout-home/home': {
      preLoaderRoute: typeof LayoutHomeHomeRouteImport
      parentRoute: typeof LayoutHomeImport
    }
    '/_layout-noAuth/login': {
      preLoaderRoute: typeof LayoutNoAuthLoginRouteImport
      parentRoute: typeof LayoutNoAuthImport
    }
    '/_layout-noAuth/signup': {
      preLoaderRoute: typeof LayoutNoAuthSignupRouteImport
      parentRoute: typeof LayoutNoAuthImport
    }
    '/_layout-withAuth/search': {
      preLoaderRoute: typeof LayoutWithAuthSearchImport
      parentRoute: typeof LayoutWithAuthImport
    }
    '/_layout-withAuth/articles/$articleid': {
      preLoaderRoute: typeof LayoutWithAuthArticlesArticleidImport
      parentRoute: typeof LayoutWithAuthImport
    }
    '/_layout-withAuth/articles/new': {
      preLoaderRoute: typeof LayoutWithAuthArticlesNewImport
      parentRoute: typeof LayoutWithAuthImport
    }
    '/_layout-withAuth/projects/$projectid': {
      preLoaderRoute: typeof LayoutWithAuthProjectsProjectidImport
      parentRoute: typeof LayoutWithAuthImport
    }
    '/_layout-withAuth/projects/new': {
      preLoaderRoute: typeof LayoutWithAuthProjectsNewImport
      parentRoute: typeof LayoutWithAuthImport
    }
    '/_layout-withAuth/user/$username': {
      preLoaderRoute: typeof LayoutWithAuthUserUsernameImport
      parentRoute: typeof LayoutWithAuthImport
    }
    '/_layout-withAuth/articles/$articleid/edit': {
      preLoaderRoute: typeof LayoutWithAuthArticlesArticleidEditImport
      parentRoute: typeof LayoutWithAuthImport
    }
    '/_layout-withAuth/articles/$articleid/link': {
      preLoaderRoute: typeof LayoutWithAuthArticlesArticleidLinkImport
      parentRoute: typeof LayoutWithAuthImport
    }
    '/_layout-withAuth/projects/$projectid/edit': {
      preLoaderRoute: typeof LayoutWithAuthProjectsProjectidEditImport
      parentRoute: typeof LayoutWithAuthImport
    }
    '/_layout-withAuth/user/$username/delete': {
      preLoaderRoute: typeof LayoutWithAuthUserUsernameDeleteImport
      parentRoute: typeof LayoutWithAuthImport
    }
    '/_layout-withAuth/user/$username/editpassword': {
      preLoaderRoute: typeof LayoutWithAuthUserUsernameEditpasswordImport
      parentRoute: typeof LayoutWithAuthImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  LayoutHomeRoute.addChildren([LayoutHomeHomeRouteRoute]),
  LayoutNoAuthRoute.addChildren([
    LayoutNoAuthLoginRouteRoute,
    LayoutNoAuthSignupRouteRoute,
  ]),
  LayoutNonavRoute.addChildren([LayoutNonavIndexRouteRoute]),
  LayoutWithAuthRoute.addChildren([
    LayoutWithAuthSearchRoute,
    LayoutWithAuthArticlesArticleidRoute,
    LayoutWithAuthArticlesNewRoute,
    LayoutWithAuthProjectsProjectidRoute,
    LayoutWithAuthProjectsNewRoute,
    LayoutWithAuthUserUsernameRoute,
    LayoutWithAuthArticlesArticleidEditRoute,
    LayoutWithAuthArticlesArticleidLinkRoute,
    LayoutWithAuthProjectsProjectidEditRoute,
    LayoutWithAuthUserUsernameDeleteRoute,
    LayoutWithAuthUserUsernameEditpasswordRoute,
  ]),
  DashboardRoute,
])

/* prettier-ignore-end */
