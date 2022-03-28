const express = require('express');
const cors = require('cors');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const Seed = require('./seeders');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(routes);

app.set('view engine', 'njk');

nunjucks.configure('src/views', {
  express: app,
  autoescape: true,
  noCache: true,
});

Seed.up();

app.listen(3000, () => {
  console.log('Food App is running!');
});
