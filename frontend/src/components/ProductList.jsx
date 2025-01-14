import { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = ({ page, size }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/products?page=${page}&size=${size}`)
            .then((response) => setProducts(response.data));
    }, [page, size]);

    return (
        <table>
            <thead>
                <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Category Name</th>
                    <th>Category ID</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.product_name}</td>
                        <td>{product.category_name}</td>
                        <td>{product.category_id}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProductList;
