

class ContactController {
      contact(req, res, next) {
            res.render('comingsoon', {title: 'Contact'});
      }
}

module.exports = new ContactController;
