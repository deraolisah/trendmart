import{  createBrowserRouter, Outlet, RouterProvider,} from "react-router-dom";
<<<<<<< HEAD
import TopNav from "./components/TopNav/TopNav.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Home from "./pages/Home/Home.jsx";
import Product from "./pages/Product/Product.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.scss";

import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout.jsx";
import Favorites from "./pages/Favorites/Favorites.jsx";
import Support from "./pages/Support/Support.jsx";
import TrackOrder from "./pages/TrackOrder/TrackOrder.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { WishlistProvider } from "./context/WishlistContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import Login from "./pages/Login/Login.jsx";



const Layout = () => {
  return (
          <div className="app">
            <TopNav />
            <Nav/>
            <Outlet />
            <Footer/>
          </div>
=======
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import TopNav from "./components/TopNav/TopNav";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import CartPage from "./pages/CartPage/CartPage";
import Product from "./pages/Product/Product";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import Footer from "./components/Footer/Footer";
import "./App.scss";

const Layout = () => {
  return (
    <div className="app">
      <TopNav />
      <Nav/>
      <Outlet />
      <Footer/>
    </div>
>>>>>>> origin/main
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
<<<<<<< HEAD
        path:"/login",
        element:<Login/>
      },
      {
        path:"/favorites",
        element:<Favorites/>
      },
      {
        path:"/cart",
        element:<Cart />
=======
        path:"/favorites",
        element:<FavoritePage />
      },
      {
        path:"/cart",
        element:<CartPage />
>>>>>>> origin/main
      },
      {
        path:"/product/:id",
        element:<Product />
      },
      {
        path:"/checkout",
<<<<<<< HEAD
        element:<Checkout />
      },
      {
        path:"/support",
        element:<Support/>
      },
      {
        path:"/track",
        element:<TrackOrder/>
=======
        element:<CheckoutPage />
>>>>>>> origin/main
      },
    ]
  },
]);

function App() {
  return (
<<<<<<< HEAD
    <AuthProvider>  
      <WishlistProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </WishlistProvider>
    </AuthProvider>
=======
    <RouterProvider router={router} />
>>>>>>> origin/main
  );
}

export default App;