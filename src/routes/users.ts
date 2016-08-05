/// <reference path="../typings/index.d.ts" />

import * as express from "express";
import * as jwt from 'jsonwebtoken';
import * as config from '../config/config';

// get an instance of the router for api routes
var router = express.Router(); 

router.get('/', function(req, res) {
  res.json({ message: 'Welcome to the coolest API on earth!' });
});

// route to return all users (GET http://localhost:8080/api/users)
router.get('/users', function(req, res) {
  res.json({ message: 'find user' });
});   


export = router;