const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const passport = require('passport');
const jwt = require('jsonwebtoken');



/*
	/login
*/

router.get('/', (req, res) => {
	res.sendFile('/client/build/views/login.html', { root: './'});
	// res.sendFile('/client/build/signInUp.html', { root: './'});
});

router.post('/', (req, res, next) => {
	console.log(req.body);
	passport.authenticate('local', {
		successRedirect: '/heckyeah',
		failureRedirect: '/login',
		failureFlash: false
	})(req, res, next);
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/users/login');
});


module.exports = router;