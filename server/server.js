var express                 = require("express"),
    mongoose                = require("mongoose"),
    passport                = require("passport"),
    bodyParser              = require("body-parser"),
    User                    = require("./models/user"),
    LocalStrategy           = require("passport-local"),
    passportLocalMongoose   = require("passport-local-mongoose");
    
var app = express();
const port = 3080;
mongoose.connect('mongodb+srv://ryandoan:ryandb123@dove.rl55z.mongodb.net/Dove?retryWrites=true&w=majority');

app.use(bodyParser.urlencoded({extended:true}));
app.use(require("express-session")({
    secret:"Test",
    resave: false,
    saveUninitialized: false
}));


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Homepage
app.get("/",function(req,res){
    res.render("home");
});

// Displays if successful login
app.get("/secret",isLoggedIn, function(req, res){
    res.render("secret");
});

// Registration Page
app.get("/register", function(req, res){
    res.render("register");
});

// Creates a user
app.post("/register", function(req, res){
User.register(new User({username:req.body.username, firstName: req.body.firstName, lastName: req.body.lastName, 
                        age: req.body.age, dob: req.body.dob, email: req.body.email}),req.body.password, function(err, user){
       if(err){
            console.log(err);
            return res.render('register');
        } //user stragety
        passport.authenticate("local")(req, res, function(){
            res.redirect("/home"); //once the user sign up
       }); 
    });
});

// Login Page
app.get("/login", function(req, res){
    res.render("login");
})

// Authentication, if success it redirects to /home if not, redirects back to login
app.post("/login", passport.authenticate("local",{
    successRedirect:"/home",
    failureRedirect:"/login"
}),function(req, res){
    res.send("User is "+ req.user.id);
});

// Logout button sends back to homepage
app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});

app.post('/search', function(req, res){
    // We will have a dropdown menu to search for a category
    var inputSearch = req.body.search;
    var searchCategory = req.body.dataSearch;

    // Add more options to search by
    switch(searchCategory){
        case 'username':
            User.find({ username: inputSearch }, function(err, user){
                if(err){
                    console.log('Error')
                }
                else{
                    // user.length checks if we have found a search result
                    if (user.length){
                        res.send(user);
                    }
                    else{
                        res.send('No users found')
                    }
                }
            })
            break;
        case 'dob':
            User.find({ dob: inputSearch }, function(err, user){
                if(err){
                    console.log('Error')
                }
                else{
                    // user.length checks if we have found a search result
                    if (user.length){
                        res.send(user);
                    }
                    else{
                        res.send('No users found')
                    }
                }
            })
            break;
    }
})

// Checks if logged in
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

app.listen(port, () =>{
    try{
        console.log('Connected correctly server.');
    }
    catch(err){
        console.log(err.stack);
    }
    finally{
    }

    console.log('Example app listening at http://localhost:3080');
})