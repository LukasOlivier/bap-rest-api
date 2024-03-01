// db.js
import { SqlClient } from 'msnodesqlv8/types';
import * as dotenv from 'dotenv';

const sql: SqlClient = require('msnodesqlv8');

dotenv.config();

const connectionString = process.env.DB_CONNECTION_STRING;

console.log(connectionString);

async function query<T>(query: string, params: any[] = []): Promise<T[]> {
    return new Promise((resolve, reject) => {
        sql.query(connectionString, query, params, (err: Error, rows: T[]) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

export default query;