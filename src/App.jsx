import { useState } from 'react'
import {createBrowserRouter , RouterProvider , Outlet, ScrollRestoration} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/about'
import Footer from './component/footer'
import Banner from './component/banner'
import Headers from './component/header'
import Header from './component/header'
import { ProductData } from './api/api'
import Product from './component/product'
import Cart from './pages/cart'
function App(){
  const Layout = ()=>{
    return(
     <>
     
     <Header/>
     <ScrollRestoration/>
     <Outlet/>
     <Footer/>
     </>

    )

  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home />,
          loader:ProductData
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/product/:id",
          element:<Product/>
        },
        {
          path:'/cart',
          element:<Cart/>
        }
      ],
    },
  ]);
  return (
   <div>
     <RouterProvider router={router} />
   </div>
     
  )
}

export default App
