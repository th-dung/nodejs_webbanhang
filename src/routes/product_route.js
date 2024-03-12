const express = require('express');
const router = express.Router();
const productController = require('../app/controller/Product_Controller');

router.post('/trash-handle-form-actions', productController.trashHandleFormActions);

router.post('/handle-form-actions', productController.handleFormActions);

router.get('/:id/edit', productController.edit);
router.put('/:id', productController.update);

router.patch('/:id/restore', productController.restore);

router.get('/create', productController.create);

router.post('/store', productController.store);

router.delete('/:id/force', productController.forceDelete);

router.delete('/:id', productController.delete);

router.get('/:slug', productController.show);

module.exports = router;
