const siteRouter = require('./site_route');
const productRouter = require('./product_route');
const blogRouter = require('./blog_route');
const meRouter = require('./me_route');
const contactRouter = require('./contact_route');
const policyRouter = require('./policy_route');
const categoryRouter = require('./category_route');

function route(app) {

      // /category
      app.use('/category', categoryRouter);
      // /policy
      app.use('/policy', policyRouter);
      // /contact
      app.use('/contact', contactRouter);
      // /me/storedProduct, sigup, sigin, logout
      app.use('/me', meRouter);
      // /blog
      app.use('/blog', blogRouter);
      // /product/:slug
      app.use('/product', productRouter);
      // index
      app.use('/', siteRouter);

}

module.exports = route;
