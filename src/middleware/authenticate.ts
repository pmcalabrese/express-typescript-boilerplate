/// <reference path="../typings/index.d.ts" />

import * as express from "express";
import * as jwt from 'jsonwebtoken';
import * as config from '../config/config';

// route middleware to verify a token
export = function (req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, config.JWTSECRET, function (err, decoded) {
      if (err) {
        return res.status(401).send({
          success: false,
          message: 'Failed to authenticate token.'
        });
      } else {
        // if everything is good, save to request for use in other router
        req.decoded = decoded;
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    });

  }
};