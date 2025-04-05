import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/menu',
        element:<Home></Home>
      },
      {
        path:'/about',
        element:<Home></Home>
      },
      {
        path:'/mobileApp',
        element:<Home></Home>
      },
      {
        path:'/cart',
        element:<Home></Home>
      },
      {
        path:'/signin',
        element:<Home></Home>
      },
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </StrictMode>,
)
