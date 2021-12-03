var express                 = require("express"),
    mongoose                = require("mongoose"),
    passport                = require("passport"),
    bodyParser              = require("body-parser"),
    User                    = require("./models/user"),
    LocalStrategy           = require("passport-local"),
    multer                  = require("multer"),
    passportLocalMongoose   = require("passport-local-mongoose");
const user = require("./models/user");
    
var app = express();
const port = 3080;
mongoose.connect('mongodb+srv://ryandoan:ryandb123@dove.rl55z.mongodb.net/Dove?retryWrites=true&w=majority');

app.use(bodyParser.urlencoded({extended:true}));
app.use(require("express-session")({
    secret:"Test",
    resave: false,
    saveUninitialized: false
}));

app.use(express.static(__dirname + './react_dove/public/'));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './react_dove/public/uploads')
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + '_' + file.originalname)
    }
})
var upload = multer({storage: storage})
//var upload = multer({dest: './react_dove/public/uploads/'})
// Creates a user
app.post("/register", upload.single('myImage'), function(req, res){
    var path_to_file = '../uploads/' + req.file.filename
    User.register(new User({username:req.body.username, firstName: req.body.firstName, lastName: req.body.lastName, 
                        age: req.body.age, age: req.body.age, interests: req.body.interest_select, bio:req.body.bio,
                        email: req.body.email, profile_pic: path_to_file}),req.body.password, function(err, user){
       if(err){
            console.log(err);
            res.redirect("/register");
        } //user stragety
        passport.authenticate("local")(req, res, function(){
            res.redirect("/home"); //once the user sign up
       }); 
    });
});

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

// Logout button sends back to homepage
app.post("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});

app.use(express.json());

app.post('/searchUsers', async (req, res) => {
    // var inputSearch = req.body.search;
    var inputSearch = req.body;
    // var searchCategory = req.body.dataSearch;

    console.log(inputSearch);

    console.log('Searching for user ' + inputSearch.searchBy);

    // Add more options to search by
    // switch(searchCategory){
    //     case 'username':
            User.find({ username: inputSearch.searchBy }, function(err, user){
                if(err){
                    console.log('Error')
                }
                else{
                    // user.length checks if we have found a search result
                    if (user.length){
                        console.log('Found user!');
                        console.log(user);
                        res.send(user);
                    }
                    else{
                        res.send('No users found')
                    }
                }
            })
            // break;
    // }
})

app.post('/addLike', async (req, res, next) => {
    var data = req.body;
    var likedUser;

    User.findOneAndUpdate({firstName: data.lat}, {$addToSet:{matches: mongoose.Types.ObjectId(req.user.id)}}, {new: true}, (err, doc) => {
            if (err) {
                console.log("Something wrong when updating data!");
            }
            
            likedUser = doc._id;

            console.log(doc);
        });

        User.findOneAndUpdate( {_id: req.user.id } ,
            { $addToSet: {matches: mongoose.Types.ObjectId(likedUser) } },
    
            function(err, success){
            if(err){
                res.send('Error');
            }
            else{
                console.log('Success');
            }
        })
});

app.get('/suggested', function(req, res){
    // Locate the current user
    
    // match_ids = [ ];

    // for(i = 0; i < req.user.interests.length; i++){
        User.find({ interests: { $in: req.user.interests}, _id: {$ne: req.user._id }}, function(err, match){
            // match_ids = new Set();
            if(err){
                console.log('Error');
            }
            else{
                // console.log('Found match ' + match.id);
                // match_ids.push(match);
                // res.send(match)
                // console.log(match.get('_id'))
                // for(j = 0; j < match.length; j++){
                    // console.log(match[j]._id);
                    res.json(match)
                // }
            }
            // console.log(match_ids)
        } )
})
//Temporary matches algorithm (same as suggested): TODO: replace with correct algorithm
app.get('/matches', function(req, res){
    // Locate the current user
    
    // match_ids = [ ];

    // for(i = 0; i < req.user.interests.length; i++){
        User.find({ interests: { $in: req.user.interests}  }, function(err, match){
            // match_ids = new Set();
            if(err){
                console.log('Error');
            }
            else{
                // console.log('Found match ' + match.id);
                // match_ids.push(match);
                // res.send(match)
                // console.log(match.get('_id'))
                // for(j = 0; j < match.length; j++){
                    // console.log(match[j]._id);
                    res.json(match)
                // }
            }
            // console.log(match_ids)
        } )
})

app.get('/myprofile', function(req, res){
    res.json(req.user);
})

app.get('/getMatches', function(req, res){
    var matches = req.user.matches;
    console.log(matches);

    User.find({matches: {$in: [req.user._id]}}, function(err, matches){
        res.json(matches);
    })
})

app.get('/home', function(req, res){
    const allUsers = User.find({ }, function(erro, users){
        res.json(users);
    });
    //console.log(allUsers)
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