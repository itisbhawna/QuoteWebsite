const http = require('http');
const fs = require('fs');
const homeFile = fs.readFileSync("index.html", "utf8");
const server = http.createServer((req, res) => {
    //console.log(req.url);
    if(req.url == '/') {
        res.end(homeFile)
    } else {
        res.writeHead(404, {"Content-type" : "text/html"})
        res.end("<h1>'Wrong Input'</h1>")
    }
});
server.listen(1200, '127.0.0.1', () => {
    console.log("Successfully Listening the Port No : 1100 on the localhost 127.0.0.1")
});