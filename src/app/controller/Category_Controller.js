const Product = require('../models/Product');
const { mutipleMongooseToObject } = require('../../util/product_oject');

class CategoryController {

      // [GET] /category/mouse
      mouse(req, res, next) {
            Product.find({ category: 'mouse' })
                  .then(products => {
                        res.render('category/category',{
                              title: 'Mouse',
                              products: mutipleMongooseToObject(products)
                        })
                  })
                  .catch(next);
      }

      // [GET] /category/headphone
      headphone(req, res, next) {
            Product.find({ category: 'headphone' })
                  .then(products => {
                        res.render('category/category',{
                              title: 'Headphone',
                              products: mutipleMongooseToObject(products)
                        })
                  })
                  .catch(next);
      }

      // [GET] /category/tivibox
      tivibox(req, res, next) {
            Product.find({ category: 'tivibox' })
                  .then(products => {
                        res.render('category/category',{
                              title: 'Tivi box',
                              products: mutipleMongooseToObject(products)
                        })
                  })
                  .catch(next);
      }

      // [GET] /category/watch
      watch(req, res, next) {
            Product.find({ category: 'watch' })
                  .then(products => {
                        res.render('category/category',{
                              title: 'Watch',
                              products: mutipleMongooseToObject(products)
                        })
                  })
                  .catch(next);
      }

}

module.exports = new CategoryController;
