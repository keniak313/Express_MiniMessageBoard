import { pool } from "../db/pool.js";

export default function db() {}

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function getAllMessages(){
  const {rows} = await pool.query("SELECT * FROM usernames");
  return rows;
}

db.getAllUsernames = getAllUsernames;
db.getAllMessages = getAllMessages;
