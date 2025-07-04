const pool = require('../config/db');

exports.getAll = async () => {
  const [rows] = await pool.query('SELECT * FROM plugins');
  return rows;
};

exports.getById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM plugins WHERE id = ?', [id]);
  return rows[0];
};


exports.create = async ({ nombre, tipo, empresa, gratis, imagen, aplicacion }) => {
  const [result] = await pool.query(
    'INSERT INTO plugins (nombre, tipo, empresa, gratis, imagen, aplicacion) VALUES (?, ?, ?, ?, ?, ?)',
    [nombre, tipo, empresa, gratis, imagen, aplicacion]
  );
  return { id: result.insertId, nombre, tipo, empresa, gratis, imagen, aplicacion };
};


exports.update = async (id, { nombre, tipo, empresa, gratis, imagen, aplicacion }) => {
  await pool.query(
    'UPDATE plugins SET nombre = ?, tipo = ?, empresa = ?, gratis = ?, imagen = ?, aplicacion = ? WHERE id = ?',
    [nombre, tipo, empresa, gratis, imagen, aplicacion, id]
  );
  return { id, nombre, tipo, empresa, gratis, imagen, aplicacion };
};

exports.remove = async (id) => {
  await pool.query('DELETE FROM plugins WHERE id = ?', [id]);
  return { deleted: true };
};