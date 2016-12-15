let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.json());

app.post('/api/message', function (req, res) {
    console.log(req.body);
    res.status(200);
    res.send('Hello World!');
});

let server = app.listen(5000, function () {
    console.log('listening on port', server.address().port)
});