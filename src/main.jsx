import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './Components/Main'
import Login from './Components/Login'
import PrivateRoutes from './Components/PrivateRoutes'
import Employees from './Components/Employees'
import AddEmployees from './Components/AddEmployees'
import AuthProvider from './Provider/AuthProvider'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Login></Login>
      },
      {
        path: '/',
        element: <PrivateRoutes></PrivateRoutes>,
        children: [
          {
            path: '/employees',
            element: <Employees></Employees>
          },
          {
            path: '/addEmployees',
            element: <AddEmployees></AddEmployees>
          }
        ]
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)