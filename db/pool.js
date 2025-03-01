import pg from "pg";
import env from 'dotenv/config'

const { Pool } = pg;

export const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
})