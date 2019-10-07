var MongoClient = require('mongodb').MongoClient;
var urldata = "mongodb://localhost:27017/";
const http = require('http');
const url = require('url');
// Xu li request 
function handler(req, res) {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === '/') {
        res.writeHead(200, { 'Content-type': 'text/plain' });
        res.write('Hello, I am a webserver !');
        res.end();
    } 
    else if (parsedUrl.pathname === '/time') {
        res.writeHead(200, { 'Content-type': 'text/plain' });
        res.write(new Date().toString());
        return res.end();
    } 
    else if (parsedUrl.pathname === '/test') {
        const name = parsedUrl.query.name;
        console.log(name);

        const myobj = { name: "John", adr: "Texas" }
        MongoClient.connect(urldata, function (err, db) {
            if (err) throw err;
            console.log("Database created!");

            var dbo = db.db("mydb");
            dbo.createCollection("user", function (err, res) {
                if (err) throw err;
                console.log("Collection created!");
            });

            dbo.collection("user").insertOne(myobj, function (err, res) {
                if (err) throw err;
                console.log("1 document inserted");
 
            });

            db.close();
        });




 
        if (!{name}) {
            res.writeHead(400, { 'Content-type': 'text/plain' });
            return res.end();
        }
        res.writeHead(200, { 'Content-type': 'text/plain' });
        res.write(`Hello` + name.name);
        return res.end();
    } else {
        res.writeHead(404, { 'Content-type': 'text/plain' });
        res.end();
    };
}
const server = http.createServer(handler);
server.listen(8080);