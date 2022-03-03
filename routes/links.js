var express = require('express');
var router = express.Router();

const pool = require('../database');

router.get('/add', function (req, res, next) {
  res.render('links/add');
});

router.post('/add', async function (req, res, next) {
  const {marca, color, url} = req.body;
  const newGorra={
    marca,
    color,
    url
  };
  await pool.query('INSERT INTO gorras set ?', [newGorra]);
  res.render('links/add');
});

router.get('/edit/:id', async (req, res, next) => {
  const {id} = req.params;
  const gorras= await pool.query('SELECT * FROM gorras WHERE set  ?', [id]);
  res.render('links/edit:id', {gorras:gorras[0]});
});

router.post('/edit/:id', async (req, res, next) => {
  const {id} = req.params;
  const {marca, color, url} = req.body;
  const newGorra={
    marca,
    color,
    url
  };
  await pool.query('UPDATE * FROM gorras WHERE set ? id set ?', [newGorra, id]);
  res.redirect('/profile');
});

router.get('/delete/:id', async (req, res, next) => {
  const {id} = req.params;
  await pool.query('DELETE FROM gorras WHERE set ?',[id]);
  res.render('delete/:id');
  res.redirect('/profile');
});

router.post('/profile', async (req, res, next) => {
  await pool.query('SELECT * FROM gorras');
  res.render('/profile');
});



module.exports = router;