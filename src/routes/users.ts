/// <reference path="../typings/index.d.ts" />

import * as express from "express";
import * as jwt from 'jsonwebtoken';
import * as config from '../config/config';
import MongoDB from '../db/mongodb';
import * as bcrypt from 'bcrypt';
import middleware_authenticate = require("../middleware/authenticate");

// get an instance of the router for api routes
var router = express.Router();

router.get('/users', middleware_authenticate, function (req, res) {
  res.json({ message: 'get all users' });
});

// route to return all users (GET http://localhost:8080/api/users)
router.get('/users/:user_id', middleware_authenticate, function (req, res) {
  res.json({ message: 'find user '+req.params.user_id });
});

// register user
router.post('/users', function (req, res) {
  if (req.body.password && req.body.password !== "" || req.body.username && req.body.username !== "") {
    res.json({ message: 'username and password cannot be empty' });
  }
  bcrypt.hash(req.body.password, 2, function (err, hash) {
    if (err) throw err;
    var User = MongoDB.get().collection('user');
    User.insert({ username: req.body.username, password: hash }, function (err, result) {
      if (err) {
        res.json({ message: 'add user failed' });
      } else {
        res.json(result);
      }
    })
  });
});

// route to authenticate a user (POST http://localhost:8080/api/authenticate)
router.post('/authenticate', function (req, res) {

    var User = MongoDB.get().collection('user');

    User.findOne({
        username: req.body.username
    }, function (err, user) {
        console.log("user",user);
        if (err) throw err;

        if (!user) {
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {

            // check if password matches
            bcrypt.compare(req.body.password, user.password, function(err, match) {
                if (err) throw err;        
                if (!match) {
                    res.json({ success: false, message: 'Authentication failed. Wrong password.' });
                } else {

                    // if user is found and password is right
                    // create a token
                    var token = jwt.sign(user, config.JWTSECRET, {
                        expiresIn: config.JWTEXPIRE // expires in 24 hours (minutes)
                    });

                    // return the information including token as JSON
                    res.json({
                        success: true,
                        token: token
                    });
                }
            });


        }

    });


});

export = router;