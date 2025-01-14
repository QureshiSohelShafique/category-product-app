const db = require('../db');

const getAllCategories = async () => {
  const [categories] = await db.query('SELECT * FROM categories');
  return categories;
};

const createCategory = async (name) => {
  const [result] = await db.query('INSERT INTO categories (name) VALUES (?)', [name]);
  return { id: result.insertId, name };
};

const deleteCategory = async (id) => {
  await db.query('DELETE FROM categories WHERE id = ?', [id]);
};

const updateCategory = async (id, name) => {
  await db.query('UPDATE categories SET name = ? WHERE id = ?', [name, id]);
};

module.exports = {
  getAllCategories,
  createCategory,
  deleteCategory,
  updateCategory,
};
