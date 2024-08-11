import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetails.css'; 
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartslice';


const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }
  

  return (
    <div className="product-details">
      <div className="product-details-image">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="product-details-info">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <div className="product-rating">
          <span>Rating: {product.rating} ★</span>
          <span>({product.rating})</span>
        </div>
        <div className="product-price">
          {product.discountPercentage ? (
            <p>
              Price: <s>${product.price}</s> ${product.price - (product.price * (product.discountPercentage / 100))} ({product.discountPercentage}% off)
            </p>
          ) : (
            <p>Price: ${product.price}</p>
          )}
        </div>
        <div className={`product-stock ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
          {product.stock > 0 ? 'In stock' : 'Out of stock'}
        </div>
        <div className="product-add-to-cart">
          <button className="buy-now-btn">Buy Now</button>
          <button className='add-btn' onClick={() => dispatch(addItem(product))}>Add to Cart</button>
          {/* <button className="add-to-cart-btn"><Link to="/cart">Add to Cart</Link></button> */}
        </div>
        
        </div>
      </div>
    
  );
};

export default ProductDetails;