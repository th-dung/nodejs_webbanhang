const express = require('express');
const app = express();
// render layout
const hbs = require('express-handlebars');
// method
var methodOverride = require('method-override')

const path = require('path');
// connect db
const db = require('./config/db/index_db');
// routers
const route = require('./routes/index_route');
// read form
const bodyParser = require('body-parser');

const session = require('express-session');
const flash = require('connect-flash');

const currency = require('./helpers/formatHelpers');

const port = 3000;

// static file
app.use(express.static(path.join(__dirname, 'public')));

// render layout
app.engine(
  'hbs', 
  hbs.engine({
    extname: '.hbs',
    helpers: require('./helpers/formatHelpers')
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'view'));

app.use(express.json());
// override with POST having ?_method=
app.use(methodOverride('_method'))

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


// Connet to DB
db.connect();

route(app);

app.listen(port, () => {
  console.log(`${port}`)
})