// const express = require('express'); //Line 1
// const app = express(); //Line 2
// const port = process.env.PORT || 5000; //Line 3

// // This displays message that the server running and listening to specified port
// app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// // create a GET route
// app.get('/express_backend', (req, res) => { //Line 9
//   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
// });
import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import App from '../src/components/App';
const PORT =  3006;
const app = express();
app.use('^/$',(req,res,next) =>{
  fs.readFile(path.resolve('./build/index.html'),'utf-8',(err,data)=>{
    if(err){
    console.error('Something went wrong:', err);
    return res.status(500).send('Oops, better luck next time!');
  }
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`)
    );
  });
});






// // app.get('/', (req, res) => {
// //     //render app to a static HTML string
    
  
// //     const indexFile = path.resolve('./build/index.html');
// //     fs.readFile(indexFile, 'utf8', (err, data) => {
// //       if (err) {

// //       }
  
// //       return res.send(
// //         data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
// //       );
// //     });
// //   });
  
  //Serve contents from public directory as static files
  app.use(express.static(path.resolve(__dirname,'..','/build')));
  
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
