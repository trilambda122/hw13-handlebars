// Import MySQL connection.
const connection = require("../config/connection.js");


const orm = {
    selectAll: function(table, cb) {
            const query = `SELECT * FROM ${table};`;

            connection.query(query, function(error, response) {
                if (error) { throw error; }
                cb(response);
            });

        }
        // insertOne: function(table, cols, vals, cb) {
        //     const query = `INSERT INTO ${table} (${cols}) VALUES ("${vals.length}");`;
        //     console.log(query);
        //     connection.query(query, function(error, response) {
        //         if (error) { throw error; }

    //     });
    //     cb(response);
    // },
    // updateOne: function(table, colVals, condition, db) {
    //     const query = `UPDATE ${table} SET ${colVals} WHERE ${condition}`;

    //     console.log(query);
    //     connection.query(query, function(error, response) {
    //         if (error) { throw error; }

    //     });
    //     cb(response);
    // },
    // deleteOne: function(table, condition, cb) {
    //     const query = `DELETE FROM ${table} WHERE ${condition};`;
    //     console.log(query);
    //     connection.query(query, function(error, response) {
    //         if (error) { throw error; }

    //     });
    //     cb(response);

    // }


};

module.exports = orm;