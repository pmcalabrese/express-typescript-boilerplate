/// <reference path="../typings/index.d.ts" />

import * as express from "express";
var router = express.Router();

router.get('/', function (req: express.Request, res: express.Response) {
    res.json({test:"another"})
});


router.get('/hello', function (req: express.Request, res: express.Response) {
    res.render('hello',{ title: "Handlebars", body: "the template engine is handlebars"}); // hello.html
});

export = router;