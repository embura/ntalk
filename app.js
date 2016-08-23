var express = require('express')
, path = require('path')
, load = require('express-load')
, error = require('./middleware/error')
, bodyParser = require('body-parser')
, cookieParser = require('cookie-parser')
, expressSession = require('express-session')
, app = express()
, cookie = cookieParser()

, favicon = require('static-favicon')
, logger = require('morgan')

, methodOverride = require('method-override')

;


app.use(favicon());
app.use(logger('dev'));

app.disable('x-powered-by');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(cookie);
app.use(expressSession({
  secret: 'cfg.SECRET', 
  name: 'cfg.KEY', 
  resave: false, 
  saveUninitialized: false,
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

//app.use(error.notFound);
//app.use(error.serverError);

load('models')
.then('controllers')
.then('routes')
.into(app)
;



module.exports = app;
