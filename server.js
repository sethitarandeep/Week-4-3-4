let express = require("express");
let app = express();

app.get('/', function(req, res){
    res.send('Hi Welcome to Week 4.')
});

app.listen(4000);
console.log('Server is running at http://localhost:4000/');