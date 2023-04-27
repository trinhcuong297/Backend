// get the client
import mysql from 'mysql2/promise';

// create the pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'backend',
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0
});

export default pool