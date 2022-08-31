const express = require("express")
  , http    = require("http")
  , path    = require("path")
  , routes  = require("./routes");
const cookieParser = require('cookie-parser');
const bodyParser=require('body-parser');
const logger = require('morgan');
const session=require('express-session');
const Sentry = require('@sentry/node');
const Tracing = require("@sentry/tracing");
const indexRouter = require('./routes/index');
const productRouter = require('./routes/product');
const authRouter = require('./routes/auth');
const port = process.env.PORT || 80 ;

const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("61d333a8-6325-4506-96e7-a180035cc26f"));
app.use(session({secret:"61d333a8-6325-4506-96e7-a180035cc26f", resave: true, saveUninitialized: false}));
app.use(function(req, res, next) {
  res.locals.userId = req.session.userid;
  next();
}); 

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/categories', productRouter);
app.use('/auth', authRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.listen(port,()=>{
	console.log("Express Server Listening on port 80");
});



