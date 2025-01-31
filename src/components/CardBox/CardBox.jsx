import { useCart } from '../../context/CartContext.jsx';
import ProductCard from '../ProductCard/ProductCard.jsx';
import "./CardBox.scss";

import { products } from '../../data/products.js'; 

const CardBox = () => {
  const { addToCart } = useCart();



  return (
    <div className="cardbox">
      <div className="product-list">
        {products.map(product=>(
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default CardBox;