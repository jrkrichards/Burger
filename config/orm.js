// Import MySQL connection.
const connection = require('./connection.js');

// Object for all our SQL statement functions.
const orm = {
  // Need to update actual code
  selectAll(tableInput, cb) {
    const queryString = `SELECT * FROM ${tableInput};`;
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // Need to update actual code
  insertOne(table, cols, vals, cb) {
    let queryString = `INSERT INTO ${table}`;

    queryString += ' (';
    queryString += cols.toString();
    queryString += ') ';
    queryString += 'VALUES (';
    queryString += printQuestionMarks(vals.length);
    queryString += ') ';

    console.log(queryString);

    connection.query(queryString, vals, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
    // Need to update actual code
  updateOne(table, objColVals, condition, cb) {
    let queryString = `UPDATE ${table}`;

    queryString += ' SET ';
    queryString += objToSql(objColVals);
    queryString += ' WHERE ';
    queryString += condition;

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
