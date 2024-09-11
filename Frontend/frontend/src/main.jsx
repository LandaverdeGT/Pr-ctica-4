import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Home.jsx'
import Login from './login.jsx'
import Search from './search.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }, 
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/search",
    element: <Search />,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />

)
