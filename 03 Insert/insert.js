var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [{_id: 23, name: "BinhLe"}, {_id: 34, name: "Nam"}];
//Insert data
//   dbo.collection("Staff").insert(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });

//   // Delete Data
//   dbo.collection("user").deleteOne(myobj,function(err,res){
//     if(err) throw err;
//     console.log("1 document deleted");
//     db.close();
//   });

    // // Find data
    // dbo.collection("user").find({}, function(err,res){
    //     if(err) throw err;
    //     console.log(res.name);
    //     db.close();
    // });

    // Insert _idField
    let obj = [
        {_id: 11, name: "Adam"},
        {_id: 22, name: "Joe"},
        {_id: 33, name: "Sam"},
        {_id: 24, name: "Binhle"},
        {_id: 45, name: "Hoang"}
    ];
    dbo.collection("Staff").insertMany(obj,function(err,res){
        if(err) throw err;
        console.log("insert ok");
        db.close();
    });

});