import mysql from 'mysql2';

const pool = mysql.createPool({
    host: 'localhost',
    user: '',
    password: '',
    database: 'AtheneaReche_M2_Books',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool.promise();