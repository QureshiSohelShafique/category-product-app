import { useState } from 'react';
import axios from 'axios';

const CategoryForm = () => {
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/categories', { name });
        setName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Category Name"
            />
            <button type="submit">Add Category</button>
        </form>
    );
};

export default CategoryForm;
