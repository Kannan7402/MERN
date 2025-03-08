const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {

    // req.method get post put delete

    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" })
        res.end('Home-page');
    }
    else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/plain" })
        res.end('about page');
    }
    else if (req.url === "/dashboard") {
        res.writeHead(200, { "Content-Type": "text/plain" })
        res.end('dashboard');
    }
    else{
        res.writeHead(404);
        res.end('page not found')
    }
})
server.listen(3000,()=>
{
    console.log('server listens')
})