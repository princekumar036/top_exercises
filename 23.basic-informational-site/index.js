const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        filepath = 'index.html'
    }
    else if (req.url === '/about') {
        filepath = 'about.html'
    }
    else if (req.url === '/contact-me') {
        filepath = 'contact-me.html'
    }
    else {
        filepath = '404.html'
    }

    fs.readFile(filepath, (err, data) => {
        res.writeHead(200)
        res.end(data)
    })

}).listen(8080)