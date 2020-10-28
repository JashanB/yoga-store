const express = require('express');
const router = express.Router();
const session = require('express-session');

module.exports = (db) => {
  router.get("/", (req, res) => {
    const sess = req.session;
    const email = req.body.email
    const password = req.body.password
    // const id = req.session.user_id;
    //if email and password present, redirect to home, else redirect to login
    if (id) {
      let userId = parseInt(req.session.user_id);
      if (id === userId) {
        db.getResourcesByTopicsForUser(id)
          .then(data => {
            const resource = { data: data, userId: userId };
            res.render('index', { resource });
          })
          .catch(err => {
            console.error(err);
          });
      } else {
        res.redirect("/")
      }
    } else {
      res.redirect("/")
    }
  });

  return router;
};
