import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const LandingScreen = lazy(()=>import("./components/LandingScreen.jsx"))
const LoginScreen = lazy(()=>import("./components/LoginScreen.jsx"))
const SignupScreen = lazy(()=>import("./components/SignupScreen.jsx"))
const Profile = lazy(()=>import('./components/Profile.jsx'))

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"/",
        element: (<Suspense fallback="Loading...">
          <LandingScreen />
        </Suspense>)
      },
      {
        path:"/login",
        element: (<Suspense fallback="Loading...">
          <LoginScreen />
        </Suspense>)
      },
      {
        path:"/signup",
        element: (<Suspense fallback="Loading...">
          <SignupScreen />
        </Suspense>)
      },
      {
        path:"/profile",
        element: (<Suspense fallback="Loading...">
          <Profile />
        </Suspense>)
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
