import React, { Suspense } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'

import ErrorPage from '@/pages/Error'

const LoginPage = React.lazy(() => import('@/pages/LoginPage'))

const Router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LoginPage />
      </Suspense>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: '*',
    element: <Navigate to='/login' />
  }
])

export default Router
