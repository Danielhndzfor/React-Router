import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Profile from './components/Profile.tsx'
import Mario from './components/Mario.tsx'
import Luigui from './components/Luigui.tsx'
import DefaultProfile from './components/DefaultProfile.tsx'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'profile/:name',
    element: <Profile />,
    children: [
      {
        index: true,
        element: <DefaultProfile />
      },
      {
        path: 'mario',
        element: <Mario />
      },
      {
        path: 'luigui',
        element: <Luigui />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)
