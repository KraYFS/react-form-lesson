import React, { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const LoginPage = React.lazy(() => import('../pages/login'))

const Router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LoginPage />
      </Suspense>
    )
  }
])

export default Router
