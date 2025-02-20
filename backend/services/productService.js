const db = require('../db');

const getAllProducts = async (offset, limit) => {
  const [products] = await db.query(
    `SELECT p.id AS ProductId, p.name AS ProductName, c.name AS CategoryName, p.category_id AS CategoryId
     FROM products p
     INNER JOIN categories c ON p.category_id = c.id
     LIMIT ? OFFSET ?`,
    [limit, offset]
  );
  return products;
};

const createProduct = async (name, category_id) => {
  const [result] = await db.query('INSERT INTO products (name, category_id) VALUES (?, ?)', [name, category_id]);
  return { id: result.insertId, name, category_id };
};

const deleteProduct = async (id) => {
  await db.query('DELETE FROM products WHERE id = ?', [id]);
};

const updateProduct = async (id, name, category_id) => {
  await db.query('UPDATE products SET name = ?, category_id = ? WHERE id = ?', [name, category_id, id]);
};

module.exports = {
  getAllProducts,
  createProduct,
  deleteProduct,
  updateProduct,
};
