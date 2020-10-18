// Import MySQL connection.
const connection = require("../config/connection.js");


function createMarks(num) {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function translateSql(obj) {
    let arr = [];

    //loop through the keys and push the key/value as a string into arr variable
    for (let key in obj) {
        let value = obj[key];
        //check to skip hidden properties
        if (Object.hasOwnProperty.call(obj, key)) {
            //if string has spaces, include them in the string
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = `"${value}"`;
            }
            //push the resulting string with the key and value onto arr
            arr.push(`${key}=${value}`);
        }
    }
    // console.log(arr);
    return arr.toString();
}



const orm = {
    selectAll: function(table, cb) {
        const query = `SELECT * FROM ${table};`;
        connection.query(query, function(error, response) {
            if (error) { throw error; }
            cb(response);
        });

    },
    // insert into burgers (burger_name,devoured) values ("Happy Meal" , false);
    insertOne: (table, cols, vals, cb) => {
        //creating the query string to bring to model
        let queryString = `INSERT INTO ${table}`;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += createMarks(vals.length);
        queryString += ") ";

        //logging the query string to the console
        console.log(queryString);

        //calling the connection to MySQL to pass the query
        connection.query(queryString, vals, (err, result) => {
            //error handling
            if (err) {
                throw err;
            }
            //callback function to return to the burger controller
            cb(result);
        });
    },

    updateOne: (table, objColVals, conditions, cb) => {
        let queryString = `UPDATE ${table}`;

        queryString += " SET ";
        queryString += translateSql(objColVals);
        queryString += " WHERE id=";
        queryString += conditions;
        queryString += ";";



        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            console.log(queryString);
            cb(result);
        });
    },

    deleteOne: (table, condition, cb) => {
        const queryString = `DELETE FROM ${table} WHERE id=${condition}`;
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            console.log(queryString);
            cb(result);
        });
    }







};

module.exports = orm;