
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/users', user.list);


app.get('/processData',function(req,res){

    var users=[
        { username : 'username1' ,password:"parola1"},
        { username : 'username2' ,password:"parola1"},
        { username : 'username3' ,password:"parola1"},
        { username : 'username4' ,password:"parola1"},
        { username : 'username5' ,password:"parola1"},
        { username : 'username6' ,password:"parola1"},
        { username : 'username7' ,password:"parola1"},
        { username : 'username8' ,password:"parola1"},
        { username : 'username9' ,password:"parola1"},
        { username : 'username10',password:"parola1"}
    ];

    var query={};
    query.startPage=req.query.startPage;
    query.noOfItems=req.query.noOfItems;

    console.log(query);
    //req.query.totalCount
    //req.query.startPage
    //req.query.noOfItems
     var ret={};
    ret.payload={};
    ret.payload.totalCount=users.length;
    var skip = (query.startPage - 1) * query.noOfItems;


    console.log(skip);
    console.log(skip + parseInt(query.noOfItems));
    ret.payload.list=users.slice(skip, skip + parseInt(query.noOfItems));//takeF();
    ret.status="success";
    ret.message="Message from server ...";
    console.log(ret.payload.list);
    res.json(ret);
});



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
