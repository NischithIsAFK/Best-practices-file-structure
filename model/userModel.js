const pool = require("../config/db");
const { v4: uuidv4 } = require("uuid");

const createUser = async (email, password) => {
  const id = uuidv4();
  const query =
    'INSERT INTO "users" (id, email, password) VALUES ($1, $2, $3) RETURNING *';
  const values = [id, email, password];
  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Error creating user");
  }
};

const getUserByEmail = async (email) => {
  const query = 'SELECT * FROM "users" WHERE email=$1';
  const values = [email];
  try {
    const result = await pool.query(query, values);
    return result.rows[0] || null;
  } catch (error) {
    console.error("Error fetching user by email:", error);
    throw new Error("Error fetching user by email");
  }
};

const getUserById = async (id) => {
  const query = 'SELECT * FROM "users" WHERE id=$1';
  const values = [id];
  try {
    const result = await pool.query(query, values);
    return result.rows[0] || null;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw new Error("Error fetching user by ID");
  }
};

const updateUserById = async (id, email, password) => {
  const query =
    'UPDATE "users" SET email=$1, password=$2 WHERE id=$3 RETURNING *';
  const values = [email, password, id];
  try {
    const result = await pool.query(query, values);
    return result.rows[0] || null;
  } catch (error) {
    console.error("Error updating user by ID:", error);
    throw new Error("Error updating user by ID");
  }
};

const deleteUserById = async (id) => {
  const query = 'DELETE FROM "users" WHERE id=$1 RETURNING *';
  const values = [id];
  try {
    const result = await pool.query(query, values);
    return result.rows[0] || null;
  } catch (error) {
    console.error("Error deleting user by ID:", error);
    throw new Error("Error deleting user by ID");
  }
};

const getAllUsers = async () => {
  const query = 'SELECT * FROM "users"';
  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    console.error("Error fetching all users:", error);
    throw new Error("Error fetching all users");
  }
};

module.exports = {
  getUserById,
  getAllUsers,
  createUser,
  updateUserById,
  deleteUserById,
  getUserByEmail,
};
