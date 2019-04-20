const http = require('http');

const server = http.createServer(function(req,res){
    res.write('<h1>hello server</h1>');
    res.end('<b>ttttt</b>');
});

server.listen(80,()=>{
    console.log('server 8080 대기중');
});

server.on('error',(error)=>{
    console.error(error);
});