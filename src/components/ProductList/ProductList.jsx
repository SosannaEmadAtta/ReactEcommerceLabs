import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css'; 
import ThemeContext from '../context/themecontext';
import languageContext from '../context/languagecontext';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const {darkMode}= useContext(ThemeContext)
  const {language} = useContext(languageContext)

  

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => setProducts(response.data.products))
      .catch(error => console.error(error));
  }, []);
  

  return (
    <div className={`mt-3 p-3 ${darkMode ? "bg-dark text-light" : "bg-light"}`}>
      <div dir={language === "en" ? "ltr" : "rtl"}>

    <div className="product-list" >
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
      </div>

    </div>
    </div>
  );
};

export default ProductList;
