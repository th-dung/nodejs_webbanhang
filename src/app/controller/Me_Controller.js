
const Product = require('../models/Product');
const { mutipleMongooseToObject } = require('../../util/product_oject');

class MeController {

      // [GET] /me/stored/product
      manager(req, res, next) {
            Promise.all([
                  Product.find({}),
                  Product.countDocumentsDeleted()
            ])
                  .then(([products, deletedCount]) =>
                        res.render('me/manage', {
                              title: 'Manager', 
                              layout: 'admin',
                              deletedCount,
                              products: mutipleMongooseToObject(products)
                        })
                  )
                  .catch (next);

      }

      // [GET] /product/trash
      trash(req, res, next) {
            Product.findWithDeleted({ deleted: true })
                  .then(products => res.render('product/trash', {
                        layout: 'admin',
                        products: mutipleMongooseToObject(products),
                        title: 'Trash'
                  }))
                  .catch(next);
      }

      // [POST] /me/logout
      logout(req, res, next) {
            res.redirect('home', { title: 'Home' });
      }

      // [GET] /me/sigup
      sigup(req, res, next) {
            res.render('comingsoon', { title: 'Register' });
      }

      // [POST] /me/login
      signin(req, res, next) {
            res.send('Làm chưa xong')
      }

      // [GET] /me/login
      login(req, res, next) {
            res.render('me/login', { title: 'Login' });
      }
}

module.exports = new MeController;
