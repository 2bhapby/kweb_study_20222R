const mysql = require('mysql2/promise');

const pool = mysql.createPool({
	user: 'kwebuser',
	password: '1234',
	database: 'kwebdb1',
});

const runQuery = async (pstmt, data) => {
    const conn = await pool.getConnection();
    try {
        const sql = conn.format(pstmt, data);
        const [result] = await conn.query(sql);
        return result;
    } finally {
        conn.release();
} };

module.exports = {runQuery};