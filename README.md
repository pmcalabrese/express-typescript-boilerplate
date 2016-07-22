# Express Typescript Boilerplate

A minimal boilerplate, with everything you need to make an Express App with Typescript. It uses the following technology

 - Node 4
 - Express 4
 - Gulp
 - Typescript 1.8
 - PM2

## Getting started

Install dependency
    
    npm install

Install the tools and typedefintion with
    
    npm run tools

for development run

    gulp watch

which will popolate the dist folder, switch to the dist folder and run

    npm start

for stop the app

    pm2 list
    pm2 <stop|delete> <myapp | pid>