/// <reference path="../typings/index.d.ts" />

import * as express from "express";
import * as jwt from 'jsonwebtoken';
import * as config from '../config/config';
var router = express.Router();


// route to authenticate a user (POST http://localhost:8080/api/authenticate)
router.post('/authenticate', function (req, res) {

    // find the user
/*    User.findOne({
        name: req.body.name
    }, function (err, user) {*/

        var user =  {
            username: "marco",
            password: "test"
        }

        var err = false;

        if (err) throw err;

        if (!user) {
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {

            // check if password matches
            if (user.password != req.body.password) {
                res.json({ success: false, message: 'Authentication failed. Wrong password.' });
            } else {

                // if user is found and password is right
                // create a token
                var token = jwt.sign(user, config.JWTSECRET, {
                    expiresIn: 1440 // expires in 24 hours (minutes)
                });

                // return the information including token as JSON
                res.json({
                    success: true,
                    token: token
                });
            }

        }

    /*});*/


});

export = router;