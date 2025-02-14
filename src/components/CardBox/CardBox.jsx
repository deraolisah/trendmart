import React, { useState, useEffect, useContext } from 'react';
import { useShopContext } from '../../context/ShopContext.jsx';
import ProductCard from '../ProductCard/ProductCard.jsx';
import ProductSkeleton from '../ProductSkeleton/ProductSkeleton.jsx';
import Pagination from '../Pagination/Pagination.jsx';
import './CardBox.scss';

const CardBox = () => {
  const { getProducts } = useShopContext();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts(currentPage); // Fetch products for the current page
        setProducts(data.products || []);
        setTotalPages(data.totalPages || 1);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [getProducts, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };



  return (
    <div className="cardbox">
      <div className="product-list">
        {loading ? (
          [...Array(6)].map((_, index) => (
            <ProductSkeleton key={index} />
          ))
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : products.length === 0 ? (
          <div className='no-products'>No products available.</div>
        ) : (
          products.map((product, index) => (
            <ProductCard key={index} product={product} handlePageChange={handlePageChange} />
          ))
        )}
              

        {/* {products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))} */}
         
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default CardBox;