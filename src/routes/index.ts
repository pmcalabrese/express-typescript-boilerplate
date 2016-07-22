/// <reference path="../typings/index.d.ts" />

import * as express from "express";

export function index(req: express.Request, res: express.Response) {
    res.json({test:"another"})
};