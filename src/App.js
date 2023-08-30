import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import About from "./components/pages/about";
import Cart from "./components/pages/cart";
import Checkout from "./components/pages/checkout";
import Contact from "./components/pages/contact";
import Footer from "./components/pages/footer";
import Header from "./components/pages/header";
import Home from './components/pages/home';
import ProductDetail from "./components/pages/productdetail";
import Products from "./components/pages/products";

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
