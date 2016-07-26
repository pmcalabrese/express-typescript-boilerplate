# Express Typescript Boilerplate

A minimalistic boilerplate, with everything you need to build services with Express and Typescript. It uses the following technologies:

 - Node 4
 - Express 4
 - Gulp
 - Typescript 1.8
 - PM2
 - Handlebar template

## Getting started

You need to have nodeJS v4 installed on your machine, please refer to nodejs.org website.

Install the tools and typedefintion with
    
    npm run tools

Install dependency
    
    npm install

for development run

    gulp watch

which will popolate the dist folder, and spin a server, for monitor, stop or delete the app

    pm2 list
    pm2 <stop|delete> <myapp | pid>

or for stop the server

    gulp serve-stop

for more commands how to control the server please refer to [PM2 docs](http://pm2.keymetrics.io/)
    