const express =  require("express");
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");
const path = require('path');
const rootRouter = require ('../src/app/controllers/authController')



const app = express();
app.use(express.json());

app.use(bodyParser.json())
app.use(bodyParser
    .urlencoded({extended: false}));

app.set('views',path.join(__dirname, 'src/app/views'));
app.set('view engine', 'ejs') 

app.use('/', rootRouter);

require('./app/controllers/index')(app);







app.listen(3030)
console.log("App rodando")
