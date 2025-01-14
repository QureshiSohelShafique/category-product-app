import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';

const ProductMaster = () => {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [page, setPage] = useState(1);
    const pageSize = 10;

    useEffect(() => {
        axios.get('http://localhost:5000/api/categories').then((response) => {
            setCategories(response.data);
        });
    }, []);

    const handleAddProduct = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/products', { name, category_id: categoryId });
        setName('');
        setCategoryId('');
    };

    return (
        <div>
            <h1>Product Master</h1>
            <form onSubmit={handleAddProduct}>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <select
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                >
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
                <button type="submit">Add Product</button>
            </form>

            <ProductList page={page} size={pageSize} />

            <button onClick={() => setPage(page > 1 ? page - 1 : 1)}>Previous</button>
            <button onClick={() => setPage(page + 1)}>Next</button>
        </div>
    );
};

export default ProductMaster;
