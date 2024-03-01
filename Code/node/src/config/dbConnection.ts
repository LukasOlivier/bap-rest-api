// db.js
import { SqlClient } from 'msnodesqlv8/types';

const sql: SqlClient = require('msnodesqlv8');

const connectionString =
    "Driver={ODBC Driver 18 for SQL Server};Server=INTEGREAT-OEW3C;Database=BAP;Trusted_Connection=yes;TrustServerCertificate=yes";

async function query<T>(query: string, params: any[] = []): Promise<T[]> {
    return new Promise((resolve, reject) => {
        sql.query(connectionString, query, params, (err: Error, rows: T[]) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
                return rows;
            }
        });
    });
}

export default query;