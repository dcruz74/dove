var express                 = require("express"),
    mongoose                = require("mongoose"),
    passport                = require("passport"),
    bodyParser              = require("body-parser"),
    User                    = require("./models/user"),
    LocalStrategy           = require("passport-local"),
    multer                  = require("multer"),
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
                        res.json(user);
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

// app.post('/addLike', function(req, res){
//     console.log('Added user to favorites for user id ' + req.user.id);
//     User.findOneAndUpdate( {_id: req.user.id } , 
//         { $addToSet: {likes: 'The rock' } },

//         function(err, success){
//         if(err){
//             res.send('Error');
//         }
//         else{
//             console.log('Success');
//         }
//     })
// })

// app.post('/addDislike', function(req, res){
//     console.log('Added user to dislikes for user id ' + req.user.id);
//     User.findOneAndUpdate( {_id: req.user.id } ,
//         { $addToSet: {dislikes: 'zac efron' } },

//         function(err, success){
//         if(err){
//             res.send('Error');
//         }
//         else{
//             console.log('Success');
//         }
//     })
// })

app.post('/addDislike', async (req, res, next) => {
    const {disliker, disliked} = req.body;
    try {
                await Promise.all([ 
                    User.findByIdAndUpdate(disliker, { $addToSet: { dislikes: disliked }}),
                    User.findByIdAndUpdate(disliked, { $addToSet: { dislikes: disliker }})
                ]);
                
        res.json({ done: true });
        
    } catch(err) {
        res.json({ done: false });
    }
});

app.use(express.json());

app.post('/addLike', async (req, res, next) => {
    var data = req.body;
    console.log(data.lat);
    User.find({ firstName: data.lat}, function(err, user){
        if(err){
            console.log('Error');
        }
        else{
            console.log('hey');
        }
    })

    try {
                await Promise.all([ 
                    User.findByIdAndUpdate(liker, { $addToSet: { likes: liked }}),
                    User.findByIdAndUpdate(liked, { $addToSet: { likes: liker }})
                ]);
                
        res.json({ done: true });
        
    } catch(err) {
        res.json({ done: false });
    }
});

app.get("/addLike", (req, res)=>{
    console.log(req.params.id);
    console.log(req.params.firstName);
    console.log(req.params.lastName);
});

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

    // }

    
})

app.get('/myprofile', function(req, res){
    res.json(req.user);
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