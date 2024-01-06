import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './pages/About.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'
import ErrorPage from './Error.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/profile-project",
    element: <App />,
    errorElement: <ErrorPage/>
  },
  {
    path: "/profile-project/about",
    element: <About />,
  },
  {
    path: "/profile-project/blog",
    element: <Blog />,

  },
  {
    path: "/profile-project/contact",
    element: <Contact />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
