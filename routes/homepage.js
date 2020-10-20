const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get("/calendar", (req, res) => {
    db.getAllLocations()
      .then(data => {
        res.send({ locations: data });
      })
      .catch(err => {
        console.error(err);
      });
  });

  router.get("/calendar/:location_id", (req, res) => {
    const location_id = req.params.location_id;
    db.getClassesForLocation(location_id)
      .then(data => {
        res.send({ classes: data });
      })
      .catch(err => {
        console.error(err);
      });
  });

  router.post("/search", (req, res) => {
    const search = req.body.search.slice(1);
    let userId = parseInt(req.session.user_id);
    db.getResourcesBySearch(search)
      .then(data => {
        const resource = { data: data, userId: userId };
        res.render('index', { resource });
      })
      .catch(err => {
        console.error(err);
        res.status(500).send(err.stack)
      });
  });

  router.get("/:user_id", (req, res) => {
    const id = req.session.user_id;
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


  router.put('/like/:resourceid', (req, res) => {
    const userId = parseInt(req.session.user_id);
    const resourceId = req.params.resourceid;
    if (userId) {
      db.checkIfLiked(resourceId, userId)
        .then(data => {
          if (data.length !== 0) {
            db.deleteLiked(resourceId, userId)
              .then(() => {
                res.redirect(`/${userId}`);
              })
              .catch(err => {
                console.error(err);
                res.status(500).send(err.stack)
              });
          } else {
            db.insertIntoLikes(userId, resourceId)
              .then(() => {
                db.getTopicsForResource(resourceId)
                  .then(data => {
                    const topics = data;
                    for (let i = 0; i < topics.length; i++) {
                      db.insertUserTopics(userId, topics[i].topic_id)
                    }
                    res.redirect(`/${userId}`);
                  })
                  .catch(err => {
                    console.error(err);
                    res.status(500).send(err.stack)
                  });
              })
              .catch(err => {
                console.error(err);
                res.status(500).send(err.stack)
              });
          }
        })
    } else {
      res.redirect(`/resources/${resourceId}`)
    }
  });

  return router;
};


