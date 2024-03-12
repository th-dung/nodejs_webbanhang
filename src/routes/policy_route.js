const express = require('express');
const router = express.Router();
const PolicyController = require('../app/controller/Policy_Controller');

router.get('/', PolicyController.policy);

module.exports = router;
