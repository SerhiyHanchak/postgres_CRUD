const express = require("express");
const router = express.Router();

router.get('/', require('../controllers/getAll'));
router.get('/:id', require('../controllers/findById'));
router.post('/create', require('../controllers/createUser'));
router.patch('/:id',require('../controllers/updateUser'));
router.delete('/:id', require('../controllers/deleteById'));

module.exports = router;
