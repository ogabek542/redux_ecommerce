import {Routes,Route,Navigate} from "react-router-dom";


import Home from "../pages/Home";
import Login from "../pages/Login";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import SignUp from "../pages/Signup";
import Checkout from "../pages/Checkout";
import ProductDetails from "../pages/ProductDetails";


const Routers = () => {

  return (
  <Routes>
    <Route path="/" element={<Navigate to="home"/>}/>
    <Route path="home" element={<Home/>}/>
    <Route path="shop" element={<Shop/>}/>
    <Route path="shop/:id" element={<ProductDetails/>}/>
    <Route path="cart" element={<Cart/>}/>
    <Route path="checkout" element={<Checkout/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="signup" element={<SignUp/>}/>
  </Routes>

  )

}

export default Routers