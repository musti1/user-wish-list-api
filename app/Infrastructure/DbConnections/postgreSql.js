const {Client} = require('pg');
const {host, port, pass, user, db} = require('../Config/db').postgre_sql;
const connectionString = `postgres://${user}:${pass}@${host}:${port}/${db}`;

const client = new Client({
    connectionString
});

client.connect();

module.exports = client;
