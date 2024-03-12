const Product = require('../models/Product');
const {mutipleMongooseToObject} = require('../../util/product_oject');

class SiteController{
      // [GET] /
      index(req, res, next) {
            Product.find({})
            .then(products => {
                  res.render('home', {
                        products: mutipleMongooseToObject(products),
                        title: 'Home'
                  });
                  //res.json(products);
            })
            .catch(next);     
      }
}
module.exports = new SiteController;
