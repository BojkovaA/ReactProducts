import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux'
import store from '../src/store/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/products",
      element: <ProductsPage />
    },
    {
      path: "/singleProduct/:id",
      element: <ProductsPage />
    },
    {
      path: "/register",
      element: <RegisterPage/>
    }
  ]
}])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
