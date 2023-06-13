const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { engine } = require('express-handlebars');
const routerApi = require('./routes')

require('dotenv').config();

const PORT = process.env.PORT || 4000;

const app = express();

//Middlewares
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.json());

app.set('views',path.join(__dirname,'views'));
app.engine('handlebars', engine());
app.set('view engine','handlebars')

routerApi(app);

//Routes
app.get('/api/v1',(req, res)=>{
    res.send('API de Mflix 📽️');
})

// app.get('/api/v1/ejemploHandlebars',(req, res)=>{
//     res.status(200).render('home');
// })

app.use('/*',(req, res) => {
    res.status(404).send("Oops! The page you requested was not found! 😿");
})

app.listen(PORT, ()=>{
    console.log(`El servidor esta escuchando en http://localhost:${PORT}/api/v1`);
})