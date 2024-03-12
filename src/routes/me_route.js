const express = require('express');
const router = express.Router();
const meController = require('../app/controller/Me_Controller');

router.get('/trash/product', meController.trash);

router.get('/manage/stored', meController.manager);

router.get('/sigup', meController.sigup);

router.post('/logout', meController.logout)

router.post('/login', meController.signin);

router.get('/login', meController.login);

module.exports = router;