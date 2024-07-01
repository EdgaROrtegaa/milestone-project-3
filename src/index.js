const express = require('express');
const pasth = require("path");
const bcrypt = require("bcrpyt");

const app = express()

const user = []

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false}))

app.get('/', (req, res) => {
    res.render('index.ejs', { name: 'kyle'})
})

app.get('/', (req, res) => {
    res.render('login.ejs')
})

app.post('/login', (req, res) => {

})

app.get('/', (req, res) => {
    res.render('register.ejs')
})

app.post('/register', (req, res) => {
    req.body.name
})
 

const port = 5500;
app.listen(port, () => {
    console/log('Server running on Port: ${port}');
})