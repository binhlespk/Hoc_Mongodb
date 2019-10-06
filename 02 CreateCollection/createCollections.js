// Create collection

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  let data = db.db("mydb");
  data.createCollection("user",function(err,res){
      if(err) throw err;
      console.log("Collection Created !!");
      db.close();  
  });
});
