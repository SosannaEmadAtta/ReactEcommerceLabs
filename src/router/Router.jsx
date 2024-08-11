import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from '../components/ProductList/ProductList';
import About from '../components/pages/about';
import Contact from '../components/pages/contact';
import Cart from '../components/pages/cart/cart';
import Register from '../components/pages/register/register';
import LogIn from '../components/pages/login';
import NavBar from '../components/navbar/navbar';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import Error from '../components/pages/error';





export default function AppRouter () {

    return <>
    <Router>
      <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/ProductDetails/:id" element={<ProductDetails />} />
          <Route path="*" element={<Error />} />

        </Routes>
      </div>
    </Router>
    </>
}