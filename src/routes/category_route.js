
const express = require('express');
const router = express.Router();
const categoryController = require('../app/controller/Category_Controller');

router.get('/mouse', categoryController.mouse);
router.get('/headphone', categoryController.headphone);
router.get('/tivibox', categoryController.tivibox);
router.get('/watch', categoryController.watch);

module.exports = router;
