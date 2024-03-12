const express = require('express');
const router = express.Router();
const siteController = require('../app/controller/Site_Controller');

router.get('/', siteController.index);

module.exports = router;
