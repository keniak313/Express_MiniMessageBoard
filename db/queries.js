import { pool } from "../db/pool.js";

export default function db() {}

async function getAllInfo() {
  const { rows } = await pool.query("SELECT * FROM mini");
  return rows;
}

async function insertData(username, message, date) {
  await pool.query(
    "INSERT INTO mini (username, message, date) VALUES ($1, $2, $3)",
    [username, message, date]
  );
}

async function findUserDataById(id) {
  const { rows } = await pool.query("SELECT * FROM mini WHERE id = $1", [id]);
  return rows;
}

async function removeAllData(){
  await pool.query("DELETE FROM mini");
}

db.getAllInfo = getAllInfo;
db.insertData = insertData;
db.findUserDataById = findUserDataById;
db.removeAllData = removeAllData;
