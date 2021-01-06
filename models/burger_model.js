// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm');

const burger = {
  selectAll(cb) {
    orm.selectAll('burger', (res) => cb(res));
  },
  // The variables cols and vals are arrays.
  insertOne(cols, vals, cb) {
    orm.insertOne('burger', cols, vals, (res) => cb(res));
  },
  updateOne(objColVals, condition, cb) {
    orm.updateOne('burger', objColVals, condition, (res) => cb(res));
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
