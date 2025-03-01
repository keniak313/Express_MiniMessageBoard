#! /usr/bin/env node
import "dotenv/config";
import pg from "pg";
const { Client } = pg;

const SQL = `
CREATE TABLE IF NOT EXISTS mini (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR ( 255 ),
    message VARCHAR ( 255 ),
    date DATE
);
`

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("Done");
}

main();
