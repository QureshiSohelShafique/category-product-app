const express = require('express');
const db = require('../db'); 
const router = express.Router();

router.post('/', (req, res) => {
    const { name, category_id } = req.body;

    if (!name || name.trim() === '') {
        return res.status(400).json({ error: 'Product name is required' });
    }

    if (!category_id || isNaN(category_id)) {
        return res.status(400).json({ error: 'Category ID is required and must be a number' });
    }

    const query = 'INSERT INTO products (name, category_id) VALUES (?, ?)';
    db.query(query, [name, category_id], (err, results) => {
        if (err) {
            console.error('Error inserting product:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(201).json({ message: 'Product created', id: results.insertId });
    });
});

module.exports = router;
