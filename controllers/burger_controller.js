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
    res.render('index', burgerObject);
  });
});

router.post('/api/burger', (req, res) => {  
  
  burger.insertOne([req.body.name], (result) => {
    res.json({ id: result.insertId });
  });
});

router.put('/api/burger/:id', (req, res) => {
  const condition = `id = ${req.params.id}`;

  burger.updateOne(
    condition,
    (result) => {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

// Export routes for server.js to use.
module.exports = router;
