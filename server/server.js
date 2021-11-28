const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const multer = require('multer')
const app = express();
const router = express.Router();
const port = 3080;

app.use(bodyParser.urlencoded({extended: false}));

// Might need to change url for each individual person
const url = "mongodb+srv://ryandoan:ryandb123@dove.rl55z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(url);
const dbName = "Dove";

const db = client.db(dbName);
const col = db.collection("users");
//define storage for images
const storage = multer.diskStorage({
    destination:function (request, file, callback){
        callback(null, './public/uploads/images');
    },
    filename: function (request, file, callback) {
        callback(null, Date.now() + file.originalname)
    },
});

const upload = multer({
    storage:storage,
    limits:{
        fieldSize: 1024 * 1024 * 3,
    },
});

app.post('/register', function(req, res){
    // To extract the input, do
    // req.body.(NAME OF INPUT)
    var userName = req.body.user;
    var password = req.body.pass;
    

    // Defining which collection we want to
    // add the data to.
    const db = client.db(dbName);
    const col = db.collection("users");
    
    // Insert the username and password to
    // the remote database
    const p = col.insertOne({
        username: userName,
        password: password,
        email: null,//should connect to registration
        first_name: null,// should connect to registration
        last_name: null, //should connect to registration
        picture: null, //should connect to registration
        bio: null, //should connect to registration
        matches: [], //should be empty at registration
        suggestions: [], //should be empty at registration
        mbti: null, //should connect this to registration
        age_range: null, // connect this to registration
        interests: [], //connect this to registration
        location: null //connect this to registration
    });

    res.send({ "username": userName, "password": password });
})

app.post('/search', function(req, res){
    var inputSearch = req.body.search;
    var searchCategory = req.body.dataSearch;

    console.log(searchCategory)

    var resultCursor = col.find({ searchCategory: inputSearch });

    resultCursor.forEach(function(doc){
        res.send(doc);
    })
})

app.post('/login', function(req, res){
    var loginUser = req.body.userLogin;
    var userPass = req.body.passLogin;

    var loginResult = col.find({ username: loginUser });

    loginResult.forEach(function(doc){
        res.send(doc);
    })
})

app.get('/api', (req, res) =>{
    res.json({message: "Hello from server!"});
})

app.listen(port, () =>{
    try{
        client.connect();
        console.log('Connected correctly server.');
    }
    catch(err){
        console.log(err.stack);
    }
    finally{
        client.close();
    }

    console.log('Example app listening at http://localhost:3080');
})

router.get('/:id', (req, res) => {
    const {id} = req.params;
    col.findOne({ _id: id}).then(user => {
        res.json({
            user,
        })
    });
});