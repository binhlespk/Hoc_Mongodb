var monggo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

monggo.connect(url,function(err,db){
    if(err) throw err;
    var dbo = db.db("mydb");
    let sort = {name: 1};
    dbo.collection("Staff").find().sort(sort).toArray(function(err,res){
        if(err) throw err;
        console.log(res);
        db.close();
    });
});