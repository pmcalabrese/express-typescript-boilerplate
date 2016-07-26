/// <reference path="../typings/index.d.ts" />

import * as express from "express";

export function index(req: express.Request, res: express.Response) {
    res.json({test:"another"})
};

export function hello(req: express.Request, res: express.Response) {
    res.render('hello',{ title: "Handlebars", body: "the template engine is handlebars"}); // hello.html
};