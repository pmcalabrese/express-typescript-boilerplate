# Express Typescript Boilerplate

A minimalistic boilerplate, with everything you need to build services with Express and Typescript. It uses the following technologies:

 - Node 4
 - Express 4
 - Gulp
 - Typescript 1.8
 - PM2
 - Handlebar template

## Getting started

You need to have NodeJS v4 installed on your machine, please refer to [NodeJs.org](https://nodejs.org).

Install tools and typescript defintion with
    
    npm run tools

Install dependency
    
    npm install

for development from the src folder ```src``` run

    gulp watch

which will popolate the ```dist``` folder, and spin the server with PM2, for monitor, stop or delete the app

    pm2 list
    pm2 <stop|delete> <myapp | pid>

or you can use the gulp shortcut for stop the server

    gulp serve-stop

for more commands how to control the server please refer to [PM2 docs](http://pm2.keymetrics.io/)
    