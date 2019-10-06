var mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/"

mongo.connect(url,function(err,db){
    if(err) throw err;
    var dbo = db.db("Database");
    let qr = {_id: 1.0};
    dbo.collection("users").find(qr).toArray(function(err,res){
        if(err) throw err;
        console.log(res);
        db.close();
    });
});