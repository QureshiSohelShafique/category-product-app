import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CategoryMaster from './pages/CategoryMaster';
import ProductMaster from './pages/ProductMaster';

const App = () => {
    return (
        <div>
            <nav>
                <Link to="/categories">Category Master</Link> |{' '}
                <Link to="/products">Product Master</Link>
            </nav>
            <Routes>
                <Route path="/categories" element={<CategoryMaster />} />
                <Route path="/products" element={<ProductMaster />} />
            </Routes>
        </div>
    );
};

export default App;
