const express = require('express');
const bodyParser = require('body-parser');
const { mysql } = require('./db.js');
const cors = require('cors');

var app = express();
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));
app.use(bodyParser.urlencoded({extended: false}))
app.listen(3000, () => console.log('Server started at port : 3000'));


// var routes = require('./routes/routes'); //import routes
var users = require('./routes/users'); //import users 
app.use("/users", users)
// routes(app);

var tasks = require('./routes/tasks')


app.use('/api', tasks)

