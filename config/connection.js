// Set up MySQL connection.
const mysql = require("mysql");

// const connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "Toomey6307!",
//     database: "burgers_db"
// });
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql(mysql.createConnection(process.env.JAWSDB_URL));
} else {

    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Toomey6307!",
        database: "burgers_db"
    });

}
// Make connection.
connection.connect((err) => {
    if (err) {
        console.error(`Error connecting to DB: ${err.stack}`);
        return;
    }
    console.log(`Connected to DB with ID ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;