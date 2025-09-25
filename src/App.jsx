import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WebsiteLayout from './website/WebsiteLayout'
import Blog from './website/pages/Blog'
import Home from './website/pages/Home'


export default function App() {

  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <WebsiteLayout />,
        children: [
          {
            path: "",
            element: < Home/>
          },
          {
            path: "/blog",
            element: <Blog />
          }
        ]
      }
    ]
  )

  return (
    < >
    <RouterProvider router={routes}/>
    </>
  )
}
