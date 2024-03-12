

class PolicyController {
      policy(req, res, next) {
            res.render('comingsoon', {title: 'Policy'});
      }
}

module.exports = new PolicyController;