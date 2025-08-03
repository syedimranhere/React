import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import './index.css'
import Layout from "./components/Layout.jsx"
import Home from "./components/Home.jsx"
import Contact from "./components/Contact.jsx"
import Login from "./components/Login.jsx"
import Profile from './components/Profile.jsx'
import { UserProvider } from "./context/usercontext.jsx"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [

      {
        path: "",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ]
  }
]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    //here add the providers

    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>,
)
