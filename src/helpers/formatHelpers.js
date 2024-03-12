/* module.exports = function currency (value) {
      return new handlebars.handlebars.SafeString(value.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VND');
} */

const hbs = require('handlebars');

module.exports = {
      currency: (price) => {
            const output = price.toLocaleString('vi-VN', {style : 'currency', currency : 'VND'});
            return new hbs.SafeString(output);
      } 
}
    