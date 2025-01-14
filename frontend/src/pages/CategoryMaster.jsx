import CategoryForm from '../components/CategoryForm';
import { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryMaster = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/categories').then((response) => {
            setCategories(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Category Master</h1>
            <CategoryForm />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category) => (
                        <tr key={category.id}>
                            <td>{category.id}</td>
                            <td>{category.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CategoryMaster;
