const express = require('express');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

router.get('/', categoryController.getAllCategories);
router.post('/', categoryController.createCategory);
router.delete('/:id', categoryController.deleteCategory);
router.put('/:id', categoryController.updateCategory);

module.exports = router;
