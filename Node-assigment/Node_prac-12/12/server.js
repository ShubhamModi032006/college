// const http = require('http');

// const server = http.createServer((req, res) => {
    
// });

// server.listen(3000, () => {
//     console.log('Server started on http://localhost:3000');
// });

// module.exports = server;


const express = require('express');
const app = express();
const fs = require('fs');


// app.get('/',(req,res)=>{
//     res.send('Hello, World!');
// })

// app.post('/post',(req,res)=>{
//     res.status(200);
//     res.json({message: 'Post request received'});
// })


app.get('/movie',(req,res)=>{
    const data = JSON.parse(fs.readFileSync('movies.json','utf-8'));
    res.json(data);

})


app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});