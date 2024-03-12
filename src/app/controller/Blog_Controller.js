

class BlogController {

      // [GET] /blog
      blog(req, res, next) {
            res.render('comingsoon', {title: 'Blog'});
      }      

}

module.exports = new BlogController;
