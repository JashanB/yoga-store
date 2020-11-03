const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get("/calendar", (req, res) => {
    console.log('first get')
    db.getAllLocations()
      .then(data => {
        console.log('promise reached first')
        res.send({ locations: data });
      })
      .catch(err => {
        console.error(err);
      });
  });

  router.get("/calendar/:location_id", (req, res) => {
    console.log('second get')
    const time = new Date();
    const location_id = req.params.location_id;
    db.getClassesForLocation(location_id, time)
      .then(data => {
        console.log('second get promise reached')
        res.send({ classes: data });
      })
      .catch(err => {
        console.error(err);
      });
  });

  return router;
};


