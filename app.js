var express = require('express')
    , path = require('path')
    , load = require('express-load')
    , error = require('./middleware/error')
    , bodyParser = require('body-parser')
    , cookieParser = require('cookie-parser')
    , expressSession = require('express-session')
    , app = express()
    , server = require('http').createServer(app).listen(4555)
    , io = require('socket.io').listen(server)

//, favicon = require('static-favicon')
    , logger = require('morgan')
    , methodOverride = require('method-override')
    , fs = require('fs')
    ;

//app.use(favicon());
app.disable('x-powered-by');

const KEY='ntalk.id',SECRET='ntalk';
var cookie = cookieParser(SECRET)
    , store = new expressSession.MemoryStore()
    , sessOpts = { secret: SECRET, key: KEY, store: store, resave: false, saveUninitialized: true, cookie: { secure: false }}
    , session = expressSession(sessOpts);


console.log("[WARN] store",store);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(cookie);
app.use(session);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(methodOverride('_method'));
app.use(express.static(path.join( __dirname, 'public')));

io.set('authorization', function(data, accept) {
    cookie(data, {}, function(err) {
        var sessionID = data.signedCookies[KEY];

        store.get(sessionID, function(err, session) {

            if (err || !session) {
                console.log('[SessionID] err', err);
                accept(null, false);
            } else {
                data.session = session;
                console.log('app[SessionID] session', session);
                accept(null, true);
            }
        });

    });
});

load('models')
    .then('controllers')
    .then('routes')
    .into(app)
;

load('sockets')
    .into(io);

app.use(error.notFound);
app.use(error.serverError);

module.exports = app;
