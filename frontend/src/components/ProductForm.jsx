import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductForm = ({ onProductAdded }) => {
    const [name, setName] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/categories')
            .then((response) => setCategories(response.data))
            .catch((error) => console.error('Error fetching categories:', error));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !categoryId) {
            alert('Please provide both a product name and category.');
            return;
        }

        try {
            await axios.post('http://localhost:5000/api/products', { name, category_id: categoryId });
            alert('Product added successfully!');
            setName('');
            setCategoryId('');
            onProductAdded(); 
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Product</h2>
            <div>
                <label>Product Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter product name"
                />
            </div>
            <div>
                <label>Category:</label>
                <select
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit">Add Product</button>
        </form>
    );
};

export default ProductForm;
