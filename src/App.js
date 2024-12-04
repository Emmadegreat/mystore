import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import About from "./pages/about";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Contact from "./pages/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from './pages/home';
import ProductDetail from "./pages/productdetail";

function App() {
  return (
    <>
      <Router>
        <Header/>
        <section className="app">
          <div className="spacer"></div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart/>} />
            {/*<Route path="/products" element={<Products/>} />*/}
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
        </section>
        <Footer
          date={new Date().getFullYear()}
          copyright="&copy; All Right Reserved. SHOP-QIK"
          contact="+234-703-453-4697"
        />
        </Router>

    </>
  );
}

export default App;
