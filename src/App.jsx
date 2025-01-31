import{  createBrowserRouter, Outlet, RouterProvider,} from "react-router-dom";
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
      },
      {
        path:"/product/:id",
        element:<Product />
      },
      {
        path:"/checkout",
        element:<Checkout />
      },
      {
        path:"/support",
        element:<Support/>
      },
      {
        path:"/track",
        element:<TrackOrder/>
      },
    ]
  },
]);

function App() {
  return (
    <AuthProvider>  
      <WishlistProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </WishlistProvider>
    </AuthProvider>
  );
}

export default App;