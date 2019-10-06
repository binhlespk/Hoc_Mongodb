var monggo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

monggo.connect(url,function(err,db){
    if(err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("Staff").find({}).toArray(function(err,res){
        if(err) throw err;
        console.log(res);
        db.close();
    });
});