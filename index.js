const express = require('express')

const app = express();

const cors = require('cors');

app.use(cors());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('News api is running')
})

const categories = require('./data/categories.json');

app.get('/news-categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})