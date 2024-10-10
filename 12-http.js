const http = require('http')

port = 5000
hostname = '127.0.0.1'

const server = http.createServer((req, res) =>{
    if (req.url === '/'){
        res.setHeader('Content-Type', 'text/plain')
        res.end('Hello World this is the home page')
    } else if (req.url === '/about'){
        res.end('About Page')
    } else {
        res.end(`
            <h1>Oops!</h1>
            <p>We can seem to find the page you are looking for</p>
            <a href="/">back home</a>
            `)
    }
    
    
})

server.listen(port)