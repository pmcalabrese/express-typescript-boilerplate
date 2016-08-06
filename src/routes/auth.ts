/// <reference path="../typings/index.d.ts" />

import * as express from "express";
import * as jwt from 'jsonwebtoken';
import * as config from '../config/config';
import MongoDB from '../db/mongodb';
import * as bcrypt from 'bcrypt';

var router = express.Router();




export = router;