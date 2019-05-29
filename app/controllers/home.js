const express = require('express');
const router = express.Router();
const db = require('../models');
const bodyParser = require('body-parser');

module.exports = (app) => {
  app.use('/', router);
  app.use(bodyParser.urlencoded({ extended: false}));
};

router.get('/', (req, res, next) => {
  db.sequelize.query('SELECT * FROM public."Articles"', {
    model: db.Article,
    mapToModel: true // pass true here if you have any mapped fields
  })
  .then((articles) => { 
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
  });
});

router.get('/add_article', (req, res, next) => {
    res.render('add_article', {
      title: 'Generator-Express MVC'
    });
});

router.post('/add_article', (req, res, next) => {
  var title = req.body.title;
  var url = req.body.url;
  var text = req.body.text;
  var createdAt = new Date().toLocaleString();
  var updatedAt = new Date().toLocaleString();

  // INSERT INTO public.cars
  // VALUES (4, 'Toyota', 1999)
  db.sequelize.query('INSERT INTO public."Articles" ("title", "url", "text", "createdAt", "updatedAt") ' +
    'VALUES (\'' + title + '\', \'' + url + '\', \'' + text + '\', \'' + createdAt + '\', \'' + updatedAt + '\');', 
  {
    model: db.Car,
    mapToModel: true // pass true here if you have any mapped fields
  })
  .then(() => { 
    res.render('add_article', {
      title: 'Generator-Express MVC'
    });
  });
});