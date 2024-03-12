const express = require('express');
const router = express.Router();
const contactController = require('../app/controller/Contact_Controller');

router.get('/', contactController.contact);

module.exports = router;
