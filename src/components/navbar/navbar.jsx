import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import themeContext from '../context/themecontext';
import languageContext from '../context/languagecontext';

const NavBar = () => {
  const totalCount = useSelector((state) => state.cart.totalCount);
  const { darkMode, setDarkMode } = useContext(themeContext);
  const {language, setLanguage} = useContext(languageContext)

  return (
    
    <nav bg={darkMode ? "dark" : "light"} expand="lg" className="bg-body-tertiary" data-bs-theme={darkMode ? "dark" : "light"} dir={language === "en" ? "ltr" : "rtl"}>
        <h1>
        <Link to="/">Products</Link>
      </h1>
    <ul>
      {/* <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li> */}
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Log_In</Link>
      </li>
      <li>
        <Link to="/cart"><i className="fas fa-shopping-cart"></i><span className="cart-count">{totalCount}</span></Link>
      </li>
      {/* <li>
        <Link to="/product_detail">product details</Link>
      </li> */}
      <li><svg style={{width: "20px", height: "20px", marginLeft: "10px", transform: `rotateZ(${darkMode ? "180deg" : "0deg"})`}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={()=>setDarkMode(!darkMode)}>
          <path d="M448 256c0-106-86-192-192-192l0 384c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
        </svg>
        </li>
        <li>
        <span style={{cursor: "pointer"}} className="p-2 mx-3" onClick={()=>setLanguage(language === "en" ? "ar" : "en")}>{language}</span>
        </li>
    </ul>
  </nav>
  )
  
};

export default NavBar;
