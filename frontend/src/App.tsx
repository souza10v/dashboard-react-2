import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/home/Home';
import Users from './pages/customers/Customers';
import Products from './pages/products/Products';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import Login from './pages/login/Login';
import "./styles/global.scss"
import Product from './pages/product/Product';
import User from './pages/customer/User';
import Error from './pages/error/Error';
import Customers from './pages/customers/Customers';



function App() {

  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
     path:"/",
     element:<Layout/>,
     children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/customers",
        element:<Customers/>
      },
      {
        path:"/products",
        element:<Products/>
      },
      {
        path:"/users/:id",
        element:<User/>
      },
      {
        path:"/products/:id",
        element:<Product/>
      }
     ]
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"*",
      element: <Error/>
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
