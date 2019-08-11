const express = require("express");
const router = express.Router();

router.get('/', require('../controllers/getAll'));
router.get('/:id', require('../controllers/findById'));
router.delete('/:id', require('../controllers/deleteById'))
router.post('/create', require('../controllers/createUser'));
router.patch('/:id',require('../controllers/updateUser'));

module.exports = router;
