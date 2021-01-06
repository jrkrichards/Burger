const express = require('express');

const router = express.Router();

// Import the model to use its database functions.
const burger = require('../models/burger_model');

// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
  burger.selectAll((data) => {
    const burgerObject = {
      burger: data,
    };
    console.log(burgerObject);
    res.render('index', burgerObject);
  });
});

// Export routes for server.js to use.
module.exports = router;
