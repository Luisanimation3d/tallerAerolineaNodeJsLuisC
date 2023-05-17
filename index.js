const hbs = require('hbs');
const path = require('path');

const express = require('express')
const app = express()

const port = 3000

app.use(express.static('public'))

app.set('views', path.join(__dirname, '/public/views'));
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/public/views/partials');

app.get('/', (req, res) => {
    res.render('disponibilidad')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})