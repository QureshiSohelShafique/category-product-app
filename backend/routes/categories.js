const express = require('express');
const db = require('../db'); 
const router = express.Router();


router.post('/', (req, res) => {
    const { name } = req.body;

    if (!name || name.trim() === '') {
        return res.status(400).json({ error: 'Category name is required' });
    }

    
    const query = 'INSERT INTO categories (name) VALUES (?)';
    db.query(query, [name], (err, results) => {
        if (err) {
            console.error('Error inserting category:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(201).json({ message: 'Category created', id: results.insertId });
    });
});

module.exports = router;
