// Import MySQL connection.
const connection = require('./connection.js');

// Object for all our SQL statement functions.
const orm = {
  // To return all data
  selectAll(tableInput, cb) {
    const queryString = `SELECT * FROM ${tableInput};`;
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // To add a new burger to be devoured
  insertOne(table, vals, cb) {
    
    let queryString = `INSERT INTO ${table}`;

    queryString += ' (';
    queryString += 'burger_name';
    queryString += ') ';
    queryString += 'VALUES (';
    queryString += "'";
    queryString += vals;
    queryString += "'";
    queryString += '); ';

    console.log(queryString);

    connection.query(queryString, vals, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
    // To update the devoured
  updateOne(table, condition, cb) {
    let queryString = `UPDATE ${table}`;

    queryString += ' SET ';
    queryString += 'devoured = 1';
    queryString += ' WHERE ';
    queryString += condition;
    queryString += ';';
    
    console.log(queryString);
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
};

// Export the orm object for the model.
module.exports = orm;
