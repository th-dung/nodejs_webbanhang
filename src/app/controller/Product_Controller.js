
const Product = require('../models/Product');
const { mongooseToObject } = require('../../util/product_oject');
const { mutipleMongooseToObject } = require('../../util/product_oject');

class ProductController {

      // [GET] /product/:slug
      show(req, res, next) {
            Product.findOne({ slug: req.params.slug })
            .then(product => {
                  res.render('product/detail', {
                        product: mongooseToObject(product),
                        title: 'Detail'
                  });
                  //res.json(product)
            })
            .catch(next);
      }

      // [GET] /product/create
      create(req, res, next) {
            res.render('product/create', {
                  layout: 'operation',
                  title: 'Create'
            });
      }

      // [POST] /product/store
      store(req, res, next) {
            //res.json(req.body);
            //const data = req.body;
            const product = new Product(req.body);
            product.save()
                  .then(() => res.redirect('/me/manage/stored'))
                  .catch(next);
      }

      // [GET] /products/id/edit
      edit(req,res,next) {
            Product.findById(req.params.id)
                  .then(product => res.render('product/edit', { 
                        layout: 'operation',
                        product: mongooseToObject(product),
                        title: 'Edit'
                  }))
                  .catch(next);
      }

      // [PUT] /product/:id
      update(req, res, next) {
            Product.updateOne({_id: req.params.id}, req.body)
                  .then(() => res.redirect('/me/manage/stored'))
                  .catch(next);
      }

      // [DELETE] /product/:id
      delete(req, res, next) {
            //res.send('deleteed');
            Product.delete({_id: req.params.id})
                  .then(() => 
                        res.redirect('back')
                  )
                  .catch(next);
      }

      // [DELETE] /product/:id/force
      forceDelete(req, res, next) {
            Product.deleteOne({ _id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
      }

      // [PATCH] /product/:id/restore
      restore(req, res, next) {
            Product.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
      }

      // [POST] /me/trash/product/trash-handle-form-actions
      trashHandleFormActions(req, res, next) {
            switch(req.body.action) {
                  case 'Restore':
                        Product.restore({ _id: { $in: req.body.productIds }})
                              .then(() => res.redirect('back'))
                              .catch(next);
                        break;
                  case 'Delete':
                        Product.delete({ _id: { $in: req.body.productIds } })
                              .then(() => res.redirect('back'))
                              .catch(next);
                        break;
                  default:
                        res.json({Message: 'Action invalid'});
            }     
      }

      // [POST] /product/handle-form-actions
      handleFormActions(req, res, next) {
            //res.json(req.body.productIds);
            switch(req.body.action) {
                  case 'Delete':
                        Product.delete({_id: { $in: req.body.productIds } })
                              .then(() => res.redirect('back'))
                              .catch(next);
                        break;
                  default:
                        res.json({Message: 'Action invalid'});
            }
            
      }
}

module.exports = new ProductController;
