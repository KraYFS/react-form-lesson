import React, { Suspense } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import ErrorPage from '../pages/errorPage'

const LoginPage = React.lazy(() => import('@/pages/login'))

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
