import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import AllProducts from "../Pages/AllProducts"
import Login from "../Pages/Login"
import Register from "../Pages/Register"
import ProductDetails from "../Components/ProductDetails"
import CartList from "../Components/CartList"

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartList />} />
    </Routes>
  )
}

export default AppRoutes