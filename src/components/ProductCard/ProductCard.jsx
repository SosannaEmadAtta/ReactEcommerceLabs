import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartslice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
 
   
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} className="product-image" />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <p className={product.stock > 0 ? 'in-stock' : 'out-of-stock'}>
        {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
      </p>
      <div className="rating">
        {Array(Math.round(product.rating)).fill().map((_, i) => (
          <span key={i}>&#9733;</span>
        ))}
      </div>
      <Link to={`/ProductDetails/${product.id}`} className="details-link">Details</Link>

      <button className='add-btn' onClick={() => dispatch(addItem(product))}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;