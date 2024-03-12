const express = require('express');
const router = express.Router();
const blogController = require('../app/controller/Blog_Controller');

// index blog
router.get('/', blogController.blog);

module.exports = router;
