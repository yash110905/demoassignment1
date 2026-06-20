const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Home',
    active: 'home',
  });
});

router.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    active: 'about',
  });
});

router.get('/projects', (req, res) => {
  res.render('projects', {
    title: 'Projects',
    active: 'projects',
  });
});

router.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact Me',
    active: 'contact',
  });
});

module.exports = router;
