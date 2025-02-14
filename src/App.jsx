// src/App.jsx
import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider, Navigate } from 'react-router-dom';
import TopNav from './components/TopNav/TopNav.jsx';
import Nav from './components/Nav/Nav.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import Product from './pages/Product/Product.jsx';
import './App.scss';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout.jsx';
import Favorites from './pages/Favorites/Favorites.jsx';
import Support from './pages/Support/Support.jsx';
import TrackOrder from './pages/TrackOrder/TrackOrder.jsx';
import Login from './pages/Login/Login.jsx';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard.jsx';
import { ShopProvider } from './context/ShopContext.jsx';
import { useShopContext } from './context/ShopContext.jsx';
import Register from './pages/Register/Register.jsx';

const Layout = () => {
  return (
    <div className="app">
      <TopNav />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

const ProtectedRoute = ({ component: Component }) => {
  const { currentUser } = useShopContext();
  
  return (
    currentUser && currentUser.role === 'admin' ? <Component /> : <Navigate to="/login" />
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/favorites',
        element: <Favorites />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/product/:id',
        element: <Product />
      },
      {
        path: '/checkout',
        element: <Checkout />
      },
      {
        path: '/support',
        element: <Support />
      },
      {
        path: '/track',
        element: <TrackOrder />
      },
      {
        path: '/admin',
        element: <ProtectedRoute component={AdminDashboard} />
      }
    ]
  }
]);

function App() {
  return (
    <ShopProvider>
      <RouterProvider router={router} />
    </ShopProvider>
  );
}

export default App;