const express = require('express');

const Users = require('./users-model');
// You will need `users-model.js` and `posts-model.js` both
// The middleware functions also need to be required
const middleWare = require('../middleware/middleware');
const router = express.Router();


router.get('/', middleWare.logger, (req, res, next) => {
  // RETURN AN ARRAY WITH ALL THE USERS
  Users.get()
    .then((user) => {
      res.status(200).json(user)
    })
    .catch(err => {
      next(err)
    })
});
router.get('/:id', middleWare.validateUserId ,(req, res, next) => {
  // RETURN THE USER OBJECT
  // this needs a middleware to verify user id
  Users.getById(req.params.id)
  .then(userId => {
    res.status(200).json(userId)
  })
  .catch(err =>{
    next(err)
  })
});

router.post('/', (req, res) => {
  // RETURN THE NEWLY CREATED USER OBJECT
  // this needs a middleware to check that the request body is valid
});

router.put('/:id', (req, res) => {
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

router.delete('/:id', (req, res) => {
  // RETURN THE FRESHLY DELETED USER OBJECT
  // this needs a middleware to verify user id
});

router.get('/:id/posts', (req, res) => {
  // RETURN THE ARRAY OF USER POSTS
  // this needs a middleware to verify user id
});

router.post('/', middleWare.logger, middleWare.validateUser, (req, res, next) => {
  // RETURN THE NEWLY CREATED USER OBJECT
  // this needs a middleware to check that the request body is valid
  const name = req.body

  Users.insert(name)
  .then(user => {
    res.status(201).json(user)
  })
  .catch(err =>{

    next(err)
  })
});
// do not forget to export the router
module.exports = router