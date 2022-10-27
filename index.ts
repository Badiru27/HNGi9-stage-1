const https = require('http');

const server = https.createServer((req, res)=>{
    if(req.method !== 'GET') return;
    res.writeHead(200, {"Content-Type" : "application/json"});
    res.write(JSON.stringify({ "slackUsername": "Badiru", "backend": true, "age": 23, "bio": "A passionate software engineer. Here to learn and relearn" }));
    res.end();

});

const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
    
})
