// src/components/AdminDashboard/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.scss';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    title: '',
    description: '',
    oldPrice: '',
    price: '',
    stock: '',
    discount: '',
    hot: false,
    images: [],
    type: '',
    tags: []
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products/get');
      setProducts(response.data);
    } catch (error) {
      setError('Failed to fetch products. Please try again later.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/products/add', newProduct);
      fetchProducts();
      setNewProduct({
        title: '',
        description: '',
        oldPrice: '',
        price: '',
        stock: '',
        discount: '',
        hot: false,
        images: [],
        type: '',
        tags: []
      });
    } catch (error) {
      setError('Failed to add product. Please try again later.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/products/delete/${id}`);
      fetchProducts();
    } catch (error) {
      setError('Failed to delete product. Please try again later.');
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={newProduct.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <input
          type="text"
          name="description"
          value={newProduct.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <input
          type="number"
          name="oldPrice"
          value={newProduct.oldPrice}
          onChange={handleChange}
          placeholder="Old Price"
        />
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />
        <input
          type="number"
          name="stock"
          value={newProduct.stock}
          onChange={handleChange}
          placeholder="Stock"
          required
        />
        <input
          type="number"
          name="discount"
          value={newProduct.discount}
          onChange={handleChange}
          placeholder="Discount"
        />
        <input
          type="checkbox"
          name="hot"
          checked={newProduct.hot}
          onChange={(e) => setNewProduct({ ...newProduct, hot: e.target.checked })}
        /> Hot
        <input
          type="text"
          name="images"
          value={newProduct.images}
          onChange={handleChange}
          placeholder="Images (comma separated URLs)"
        />
        <input
          type="text"
          name="type"
          value={newProduct.type}
          onChange={handleChange}
          placeholder="Type"
          required
        />
        <input
          type="text"
          name="tags"
          value={newProduct.tags}
          onChange={handleChange}
          placeholder="Tags (comma separated)"
        />
        <button type="submit">Add Product</button>
      </form>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            <p>{product.title}</p>
            <button onClick={() => handleDelete(product._id)}>Delete</button>
            {/* Add an edit button and functionality if needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;