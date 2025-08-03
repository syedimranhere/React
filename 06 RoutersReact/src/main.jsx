import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router'
import Layout from './layout.jsx'
import './index.css'; // ← Must be at the top
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import Contact from './components/contact/contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/github/github.jsx'
// import User from './components/User/User.jsx'


// below we are defining all routes
const router = createBrowserRouter([
  {
    // array of path here also

    path: '/',
    element: <Layout />,
    // array of path inside children
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'user/:userId',
        element: <User />
      },
      {
        loader:githubInfoLoader,
        path: 'github',
        element: <Github />
      },


      // Add more routes as needed
    ]
  },
  // Add more routes as needed

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
