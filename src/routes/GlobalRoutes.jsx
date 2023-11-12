import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../pages/Home"
import Admin from "../pages/Admin"
import About from "../pages/About"
import Login from "../pages/Login"
import PrivateRoutes from "./PrivateRoutes";
import AdminRoutes from "./AdminRoutes";
import RekapPenjualan from "../pages/RekapPenjualan";
import UserRoutes from "./UserRoutes";
import Cart from "../pages/Cart";
import ProductDetail from "../pages/ProductDetail";

const GlobalRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<PrivateRoutes />}>
                <Route element={<AdminRoutes />}>
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/rekap-penjualan" element={<RekapPenjualan />} />
                </Route>
                <Route element={<UserRoutes />}>
                    <Route path="/cart" element={<Cart />} />
                </Route>
            </Route>
            <Route path="/product-detail/:id" element={<ProductDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
}

export default GlobalRoutes;
