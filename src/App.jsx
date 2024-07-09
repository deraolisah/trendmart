import{  createBrowserRouter, Outlet, RouterProvider,} from "react-router-dom";
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
      <Outlet/>
      <Footer/>
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
        path:"/favorites",
        element:<FavoritePage/>
      },
      {
        path:"/cart",
        element:<CartPage/>
      },
      {
        path:"/product/:id",
        element:<Product/>
      },
      {
        path:"/checkout",
        element:<CheckoutPage/>
      },
    ]
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
