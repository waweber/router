/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LayoutA2Import } from './routes/_layout-a2'
import { Route as LayoutA1Import } from './routes/_layout-a1'
import { Route as JestedRouteImport } from './routes/jested/route'
import { Route as IndexImport } from './routes/index'
import { Route as NestedLayoutB2Import } from './routes/nested/_layout-b2'
import { Route as NestedLayoutB1Import } from './routes/nested/_layout-b1'
import { Route as JestedLayoutB4Import } from './routes/jested/_layout-b4'
import { Route as JestedLayoutB3Import } from './routes/jested/_layout-b3'
import { Route as LayoutA2BarImport } from './routes/_layout-a2/bar'
import { Route as LayoutA1FooImport } from './routes/_layout-a1/foo'
import { Route as folderInFolderImport } from './routes/(folder)/in-folder'
import { Route as NestedLayoutB1IndexImport } from './routes/nested/_layout-b1/index'
import { Route as JestedLayoutB3IndexImport } from './routes/jested/_layout-b3/index'
import { Route as NestedLayoutB2FooImport } from './routes/nested/_layout-b2/foo'
import { Route as NestedLayoutB1LayoutC1Import } from './routes/nested/_layout-b1/_layout-c1'
import { Route as JestedLayoutB4FooImport } from './routes/jested/_layout-b4/foo'
import { Route as JestedLayoutB3LayoutC2Import } from './routes/jested/_layout-b3/_layout-c2'
import { Route as NestedLayoutB1LayoutC1BarImport } from './routes/nested/_layout-b1/_layout-c1/bar'
import { Route as JestedLayoutB3LayoutC2BarImport } from './routes/jested/_layout-b3/_layout-c2/bar'

// Create Virtual Routes

const NestedImport = createFileRoute('/nested')()

// Create/Update Routes

const NestedRoute = NestedImport.update({
  path: '/nested',
  getParentRoute: () => rootRoute,
} as any)

const LayoutA2Route = LayoutA2Import.update({
  id: '/_layout-a2',
  getParentRoute: () => rootRoute,
} as any)

const LayoutA1Route = LayoutA1Import.update({
  id: '/_layout-a1',
  getParentRoute: () => rootRoute,
} as any)

const JestedRouteRoute = JestedRouteImport.update({
  path: '/jested',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const NestedLayoutB2Route = NestedLayoutB2Import.update({
  id: '/_layout-b2',
  getParentRoute: () => NestedRoute,
} as any)

const NestedLayoutB1Route = NestedLayoutB1Import.update({
  id: '/_layout-b1',
  getParentRoute: () => NestedRoute,
} as any)

const JestedLayoutB4Route = JestedLayoutB4Import.update({
  id: '/_layout-b4',
  getParentRoute: () => JestedRouteRoute,
} as any)

const JestedLayoutB3Route = JestedLayoutB3Import.update({
  id: '/_layout-b3',
  getParentRoute: () => JestedRouteRoute,
} as any)

const LayoutA2BarRoute = LayoutA2BarImport.update({
  path: '/bar',
  getParentRoute: () => LayoutA2Route,
} as any)

const LayoutA1FooRoute = LayoutA1FooImport.update({
  path: '/foo',
  getParentRoute: () => LayoutA1Route,
} as any)

const folderInFolderRoute = folderInFolderImport.update({
  path: '/in-folder',
  getParentRoute: () => rootRoute,
} as any)

const NestedLayoutB1IndexRoute = NestedLayoutB1IndexImport.update({
  path: '/',
  getParentRoute: () => NestedLayoutB1Route,
} as any)

const JestedLayoutB3IndexRoute = JestedLayoutB3IndexImport.update({
  path: '/',
  getParentRoute: () => JestedLayoutB3Route,
} as any)

const NestedLayoutB2FooRoute = NestedLayoutB2FooImport.update({
  path: '/foo',
  getParentRoute: () => NestedLayoutB2Route,
} as any)

const NestedLayoutB1LayoutC1Route = NestedLayoutB1LayoutC1Import.update({
  id: '/_layout-c1',
  getParentRoute: () => NestedLayoutB1Route,
} as any)

const JestedLayoutB4FooRoute = JestedLayoutB4FooImport.update({
  path: '/foo',
  getParentRoute: () => JestedLayoutB4Route,
} as any)

const JestedLayoutB3LayoutC2Route = JestedLayoutB3LayoutC2Import.update({
  id: '/_layout-c2',
  getParentRoute: () => JestedLayoutB3Route,
} as any)

const NestedLayoutB1LayoutC1BarRoute = NestedLayoutB1LayoutC1BarImport.update({
  path: '/bar',
  getParentRoute: () => NestedLayoutB1LayoutC1Route,
} as any)

const JestedLayoutB3LayoutC2BarRoute = JestedLayoutB3LayoutC2BarImport.update({
  path: '/bar',
  getParentRoute: () => JestedLayoutB3LayoutC2Route,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/jested': {
      id: '/jested'
      path: '/jested'
      fullPath: '/jested'
      preLoaderRoute: typeof JestedRouteImport
      parentRoute: typeof rootRoute
    }
    '/_layout-a1': {
      id: '/_layout-a1'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutA1Import
      parentRoute: typeof rootRoute
    }
    '/_layout-a2': {
      id: '/_layout-a2'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutA2Import
      parentRoute: typeof rootRoute
    }
    '/(folder)/in-folder': {
      id: '/in-folder'
      path: '/in-folder'
      fullPath: '/in-folder'
      preLoaderRoute: typeof folderInFolderImport
      parentRoute: typeof rootRoute
    }
    '/_layout-a1/foo': {
      id: '/_layout-a1/foo'
      path: '/foo'
      fullPath: '/foo'
      preLoaderRoute: typeof LayoutA1FooImport
      parentRoute: typeof LayoutA1Import
    }
    '/_layout-a2/bar': {
      id: '/_layout-a2/bar'
      path: '/bar'
      fullPath: '/bar'
      preLoaderRoute: typeof LayoutA2BarImport
      parentRoute: typeof LayoutA2Import
    }
    '/jested/_layout-b3': {
      id: '/jested/_layout-b3'
      path: ''
      fullPath: '/jested'
      preLoaderRoute: typeof JestedLayoutB3Import
      parentRoute: typeof JestedRouteImport
    }
    '/jested/_layout-b4': {
      id: '/jested/_layout-b4'
      path: ''
      fullPath: '/jested'
      preLoaderRoute: typeof JestedLayoutB4Import
      parentRoute: typeof JestedRouteImport
    }
    '/nested': {
      id: '/nested'
      path: '/nested'
      fullPath: '/nested'
      preLoaderRoute: typeof NestedImport
      parentRoute: typeof rootRoute
    }
    '/nested/_layout-b1': {
      id: '/nested/_layout-b1'
      path: '/nested'
      fullPath: '/nested'
      preLoaderRoute: typeof NestedLayoutB1Import
      parentRoute: typeof NestedRoute
    }
    '/nested/_layout-b2': {
      id: '/nested/_layout-b2'
      path: ''
      fullPath: '/nested'
      preLoaderRoute: typeof NestedLayoutB2Import
      parentRoute: typeof NestedImport
    }
    '/jested/_layout-b3/_layout-c2': {
      id: '/jested/_layout-b3/_layout-c2'
      path: ''
      fullPath: '/jested'
      preLoaderRoute: typeof JestedLayoutB3LayoutC2Import
      parentRoute: typeof JestedLayoutB3Import
    }
    '/jested/_layout-b4/foo': {
      id: '/jested/_layout-b4/foo'
      path: '/foo'
      fullPath: '/jested/foo'
      preLoaderRoute: typeof JestedLayoutB4FooImport
      parentRoute: typeof JestedLayoutB4Import
    }
    '/nested/_layout-b1/_layout-c1': {
      id: '/nested/_layout-b1/_layout-c1'
      path: ''
      fullPath: '/nested'
      preLoaderRoute: typeof NestedLayoutB1LayoutC1Import
      parentRoute: typeof NestedLayoutB1Import
    }
    '/nested/_layout-b2/foo': {
      id: '/nested/_layout-b2/foo'
      path: '/foo'
      fullPath: '/nested/foo'
      preLoaderRoute: typeof NestedLayoutB2FooImport
      parentRoute: typeof NestedLayoutB2Import
    }
    '/jested/_layout-b3/': {
      id: '/jested/_layout-b3/'
      path: '/'
      fullPath: '/jested/'
      preLoaderRoute: typeof JestedLayoutB3IndexImport
      parentRoute: typeof JestedLayoutB3Import
    }
    '/nested/_layout-b1/': {
      id: '/nested/_layout-b1/'
      path: '/'
      fullPath: '/nested/'
      preLoaderRoute: typeof NestedLayoutB1IndexImport
      parentRoute: typeof NestedLayoutB1Import
    }
    '/jested/_layout-b3/_layout-c2/bar': {
      id: '/jested/_layout-b3/_layout-c2/bar'
      path: '/bar'
      fullPath: '/jested/bar'
      preLoaderRoute: typeof JestedLayoutB3LayoutC2BarImport
      parentRoute: typeof JestedLayoutB3LayoutC2Import
    }
    '/nested/_layout-b1/_layout-c1/bar': {
      id: '/nested/_layout-b1/_layout-c1/bar'
      path: '/bar'
      fullPath: '/nested/bar'
      preLoaderRoute: typeof NestedLayoutB1LayoutC1BarImport
      parentRoute: typeof NestedLayoutB1LayoutC1Import
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  JestedRouteRoute: JestedRouteRoute.addChildren({
    JestedLayoutB3Route: JestedLayoutB3Route.addChildren({
      JestedLayoutB3LayoutC2Route: JestedLayoutB3LayoutC2Route.addChildren({
        JestedLayoutB3LayoutC2BarRoute,
      }),
      JestedLayoutB3IndexRoute,
    }),
    JestedLayoutB4Route: JestedLayoutB4Route.addChildren({
      JestedLayoutB4FooRoute,
    }),
  }),
  LayoutA1Route: LayoutA1Route.addChildren({ LayoutA1FooRoute }),
  LayoutA2Route: LayoutA2Route.addChildren({ LayoutA2BarRoute }),
  folderInFolderRoute,
  NestedRoute: NestedRoute.addChildren({
    NestedLayoutB1Route: NestedLayoutB1Route.addChildren({
      NestedLayoutB1LayoutC1Route: NestedLayoutB1LayoutC1Route.addChildren({
        NestedLayoutB1LayoutC1BarRoute,
      }),
      NestedLayoutB1IndexRoute,
    }),
    NestedLayoutB2Route: NestedLayoutB2Route.addChildren({
      NestedLayoutB2FooRoute,
    }),
  }),
})

/* prettier-ignore-end */
