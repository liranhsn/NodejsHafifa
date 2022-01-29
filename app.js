const http = require('http');

const server = http.createServer((req, res)=>{

//Check home page
if(req.url === '/'){
    res.end('Welcome to our home page')
}
if(req.url === '/about'){
    res.end('Here is out history')
}

res.end(`
<h1>Oops</h1>
<p>We cant seem to find the page you are looking for</p>
<a href="/">Back home</a>
`)
})

server.listen(5000)