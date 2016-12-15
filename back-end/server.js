let express = require('express');
let bodyParser = require('body-parser');
let mongo = require('mongodb').MongoClient;
let app = express();

app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

app.post('/api/message', function (req, res) {
    console.log(req.body);
    res.status(200);
    res.send('Hello World!');
});

mongo.connect("mongodb://localhost:27017/humongous", function (err, db) {
    if (err) {
        console.log("Unable connect to MongoDB!");
        return;
    }
    console.log("Connect to MongoDB successfully");
    db.collection('messages').insertOne({msg: 'test'});
});

let server = app.listen(5000, function () {
    console.log('listening on port', server.address().port)
});
