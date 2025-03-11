const cluster = require('cluster')
const http = require('http')
const os = require('os')

const cpus =  os.cpus().length;

if(cluster.isMaster){
    console.log(`master is running and number of ports are ${cpus}`)


for (let i=0;i<cpus;i++)
{
    cluster.fork()
}

cluster.on('exit',(worker , code ,signal)=>
{
    console.log(`process dies ${worker.process.pid}`)
});
}

else{
    http.createServer((req,res)=>
    {
    res.writeHead(200, {'content-type' :' text/plain'});
    res.end(cluster.worker.id);
    }).listen(3000)
    
    console.log(`worker process ${process.pid}`)
}