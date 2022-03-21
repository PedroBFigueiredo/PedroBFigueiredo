const { Pool } = require('pg');

const pool = new Pool({
    user: 'ifms-dw2',
    host: 'localhost',
    database: 'dwteste',
    password: 'postgres',
    port: 5432
})

module.exports = pool;