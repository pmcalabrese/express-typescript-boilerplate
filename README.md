# Express Typescript Boilerplate

A minimal boilerplate, with everything you need to make an Express App with Typescript. It uses the following technology

 - Node 4
 - Express 4
 - Gulp
 - Typescript 1.8
 - PM2

## Getting started

You need to have nodeJS v4 installed on your machine, please refer to nodejs.org website.

Install dependency
    
    npm install

Install the tools and typedefintion with
    
    npm run tools

for development run

    gulp watch

which will popolate the dist folder, for spin the server from the ```dist``` folder run

    npm start

for monitor stop or delete the app, for more commands how to control the server please refer to PM2 docs

    pm2 list
    pm2 <stop|delete> <myapp | pid>