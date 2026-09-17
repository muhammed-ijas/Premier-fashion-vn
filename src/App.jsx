import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductsServices from "./pages/ProductsServices";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
              <Route path="products-and-services" element={<ProductsServices />} />
        <Route path="clients" element={<Clients />} />
        <Route path="contact" element={<Contact />} />
        <Route path="careers" element={<Careers />} />
      </Route>
    </Routes>
  );
}
