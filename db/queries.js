import { pool } from "../db/pool.js";

export default function db() {}

export async function getAll() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

db.getAll = getAll();
