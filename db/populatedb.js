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

INSERT INTO mini (username, message, date)
VALUES
    ('Pawel', 'Cos cos', '2025-03-01 12:00:00'),
    ('Aga', 'Cos innego tutaj jest...', '2025-03-01 13:00:00');
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
