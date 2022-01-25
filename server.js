// load the express package and create our app
var express = require('express')
var app = express();
const PORT = process.env.PORT || 8080;

// set the port based on environment *more on environments later)
var port = PORT;

// send our index.html file to the user of our the home page
app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html');
});



// ########## ADMIN SECTION ##########
// create routes for the admin section
// get an instance of the router
var adminRouter = express.Router();

// route middleware that will happen on every request
adminRouter.use(function(req, res, next){
	
	// log each request to the console
	console.log(req.method, req.url);
	
	// continue doing what we were doing and go to the route
	next(); 
});

// admin main page. the dashboard (http://localhost:PORT.admin)
adminRouter.get('/', function(req, res){
	res.send('I am the dashboard!'); 
});

// users page (http://localhost:PORT/admin/users)
adminRouter.get('/users', function(req, res){
	res.send('I show all the users!'); 
});

// posts page (http://localhost:PORT/admin/posts)
adminRouter.get('/posts', function(req, res){
	res.send('I show all the posts!');
});

// apply the routes to the applicaiton
app.use('/admin', adminRouter);



// ########## SERVER INITIALISATION ##########
// start the server
app.listen(PORT);
console.log('Express Server running at http://127.0.0.1:' + PORT);
	
	