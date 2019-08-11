const express = require('express')
const router = express.Router()

router.get("/", (req, res, next) => {
  res.status(200).send({message:'Postgres API - CRUD'});
});

router.use('/user', require('./user'))

router.use(require('../utils/errorHandler'))

module.exports = router