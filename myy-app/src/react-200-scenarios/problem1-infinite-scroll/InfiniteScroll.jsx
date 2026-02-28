// Problem1-InfiniteScroll.jsx
import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';

const InfiniteScroll = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();
  const lastProductRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPage => prevPage + 1);
      }
    });
    
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.example.com/products?page=${page}&limit=10`
        );
        setProducts(prev => [...prev, ...response.data.products]);
        setHasMore(response.data.hasMore);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, [page]);

  return (
    <div className="products-container">
      <h2>محصولات</h2>
      <div className="products-grid">
        {products.map((product, index) => {
          if (products.length === index + 1) {
            return (
              <div ref={lastProductRef} key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.price} تومان</p>
              </div>
            );
          } else {
            return (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.price} تومان</p>
              </div>
            );
          }
        })}
      </div>
      {loading && <div className="loading">در حال بارگذاری...</div>}
    </div>
  );
};

export default InfiniteScroll;