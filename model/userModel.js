const pool = require("../config/db");

const createUser = async (email, password) => {
  const query = 'INSERT INTO "user"(email, password) VALUES($1, $2) RETURNING *';
  const values = [email, password];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const getUserById = async (id) => {
  const query = 'SELECT * FROM "user" where id=$1';
  const values = [id];
  const result = await pool.query(query, values);
  return result.rows[0];
};
const updateUserById = async (id, email, password) => {
  const query =
    'UPDATE "user" SET email=$1, password=$2 where id=$3 RETURNING *';
  const values = [email, password, id];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const deleteUserById = async (id) => {
  const query = 'DELETE FROM "user" where id=$1 RETURNING *';
  const values = [id];
  const result = await pool.query(query, values);
  return result.rows[0];
};
const getAllUsers = async () => {
  const query = 'SELECT * FROM "user"';
  const result = await pool.query(query);
  return result.rows;
};

module.exports = {
  getUserById,
  getAllUsers,
  createUser,
  updateUserById,
  deleteUserById,
};
