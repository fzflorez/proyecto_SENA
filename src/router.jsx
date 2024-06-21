
import { BrowserRouter, Route, Routes } from "react-router-dom"
import IndexPage from "./views/IndexPage"
import ProductsPage from "./views/ProductsPage"
import DetailProductPage from "./views/DetailProductPage"
import LoginPage from "./views/LoginPage"
import RegisterPage from "./views/RegisterPage"
import ContactPage from "./views/ContactPage"
import { AuthContextProvider } from "./context/AuthContext"

export default function AppRouter() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<IndexPage/>} />
        <Route path="/productos/:id" element={<ProductsPage/>} />
        <Route path="/productos/:item/:id" element={<DetailProductPage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
    </AuthContextProvider>
  )
}
