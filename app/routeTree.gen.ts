/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as publicIndexImport } from './routes/(public)/index'
import { Route as authenticatedProfileImport } from './routes/(authenticated)/profile'
import { Route as authenticatedFriendsImport } from './routes/(authenticated)/friends'
import { Route as authAuthImport } from './routes/(auth)/_auth'
import { Route as authAuthRegisterImport } from './routes/(auth)/_auth.register'
import { Route as authAuthLoginImport } from './routes/(auth)/_auth.login'

// Create Virtual Routes

const authImport = createFileRoute('/(auth)')()

// Create/Update Routes

const authRoute = authImport.update({
  id: '/(auth)',
  getParentRoute: () => rootRoute,
} as any)

const publicIndexRoute = publicIndexImport.update({
  id: '/(public)/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const authenticatedProfileRoute = authenticatedProfileImport.update({
  id: '/(authenticated)/profile',
  path: '/profile',
  getParentRoute: () => rootRoute,
} as any)

const authenticatedFriendsRoute = authenticatedFriendsImport.update({
  id: '/(authenticated)/friends',
  path: '/friends',
  getParentRoute: () => rootRoute,
} as any)

const authAuthRoute = authAuthImport.update({
  id: '/_auth',
  getParentRoute: () => authRoute,
} as any)

const authAuthRegisterRoute = authAuthRegisterImport.update({
  id: '/register',
  path: '/register',
  getParentRoute: () => authAuthRoute,
} as any)

const authAuthLoginRoute = authAuthLoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => authAuthRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/(auth)': {
      id: '/(auth)'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof authImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/_auth': {
      id: '/(auth)/_auth'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof authAuthImport
      parentRoute: typeof authRoute
    }
    '/(authenticated)/friends': {
      id: '/(authenticated)/friends'
      path: '/friends'
      fullPath: '/friends'
      preLoaderRoute: typeof authenticatedFriendsImport
      parentRoute: typeof rootRoute
    }
    '/(authenticated)/profile': {
      id: '/(authenticated)/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof authenticatedProfileImport
      parentRoute: typeof rootRoute
    }
    '/(public)/': {
      id: '/(public)/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof publicIndexImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/_auth/login': {
      id: '/(auth)/_auth/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof authAuthLoginImport
      parentRoute: typeof authAuthImport
    }
    '/(auth)/_auth/register': {
      id: '/(auth)/_auth/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof authAuthRegisterImport
      parentRoute: typeof authAuthImport
    }
  }
}

// Create and export the route tree

interface authAuthRouteChildren {
  authAuthLoginRoute: typeof authAuthLoginRoute
  authAuthRegisterRoute: typeof authAuthRegisterRoute
}

const authAuthRouteChildren: authAuthRouteChildren = {
  authAuthLoginRoute: authAuthLoginRoute,
  authAuthRegisterRoute: authAuthRegisterRoute,
}

const authAuthRouteWithChildren = authAuthRoute._addFileChildren(
  authAuthRouteChildren,
)

interface authRouteChildren {
  authAuthRoute: typeof authAuthRouteWithChildren
}

const authRouteChildren: authRouteChildren = {
  authAuthRoute: authAuthRouteWithChildren,
}

const authRouteWithChildren = authRoute._addFileChildren(authRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof publicIndexRoute
  '/friends': typeof authenticatedFriendsRoute
  '/profile': typeof authenticatedProfileRoute
  '/login': typeof authAuthLoginRoute
  '/register': typeof authAuthRegisterRoute
}

export interface FileRoutesByTo {
  '/': typeof publicIndexRoute
  '/friends': typeof authenticatedFriendsRoute
  '/profile': typeof authenticatedProfileRoute
  '/login': typeof authAuthLoginRoute
  '/register': typeof authAuthRegisterRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/(auth)': typeof authRouteWithChildren
  '/(auth)/_auth': typeof authAuthRouteWithChildren
  '/(authenticated)/friends': typeof authenticatedFriendsRoute
  '/(authenticated)/profile': typeof authenticatedProfileRoute
  '/(public)/': typeof publicIndexRoute
  '/(auth)/_auth/login': typeof authAuthLoginRoute
  '/(auth)/_auth/register': typeof authAuthRegisterRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/friends' | '/profile' | '/login' | '/register'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/friends' | '/profile' | '/login' | '/register'
  id:
    | '__root__'
    | '/(auth)'
    | '/(auth)/_auth'
    | '/(authenticated)/friends'
    | '/(authenticated)/profile'
    | '/(public)/'
    | '/(auth)/_auth/login'
    | '/(auth)/_auth/register'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  authRoute: typeof authRouteWithChildren
  authenticatedFriendsRoute: typeof authenticatedFriendsRoute
  authenticatedProfileRoute: typeof authenticatedProfileRoute
  publicIndexRoute: typeof publicIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  authRoute: authRouteWithChildren,
  authenticatedFriendsRoute: authenticatedFriendsRoute,
  authenticatedProfileRoute: authenticatedProfileRoute,
  publicIndexRoute: publicIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/(auth)",
        "/(authenticated)/friends",
        "/(authenticated)/profile",
        "/(public)/"
      ]
    },
    "/(auth)": {
      "filePath": "(auth)",
      "children": [
        "/(auth)/_auth"
      ]
    },
    "/(auth)/_auth": {
      "filePath": "(auth)/_auth.tsx",
      "parent": "/(auth)",
      "children": [
        "/(auth)/_auth/login",
        "/(auth)/_auth/register"
      ]
    },
    "/(authenticated)/friends": {
      "filePath": "(authenticated)/friends.tsx"
    },
    "/(authenticated)/profile": {
      "filePath": "(authenticated)/profile.tsx"
    },
    "/(public)/": {
      "filePath": "(public)/index.tsx"
    },
    "/(auth)/_auth/login": {
      "filePath": "(auth)/_auth.login.tsx",
      "parent": "/(auth)/_auth"
    },
    "/(auth)/_auth/register": {
      "filePath": "(auth)/_auth.register.tsx",
      "parent": "/(auth)/_auth"
    }
  }
}
ROUTE_MANIFEST_END */
