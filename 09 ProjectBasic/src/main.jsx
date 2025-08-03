import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from "./components/home.jsx"
import About from "./components/aboutMe.jsx"
import Contact from "./components/contact.jsx"

const myRouter = createBrowserRouter([  
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path:"",
        element: <Home />,
      },
        {
        path:"about",
        element: <About />,
      },
        {
        path:"contact",
        element: <Contact />,
      },
        {
        path:"github",
        loader:askAPI,
        element: <Github />,
      },

    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* below is a component */}
    <RouterProvider router={myRouter} />
  </StrictMode>,
)
