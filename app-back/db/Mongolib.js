const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const url = process.env.mongourl;
//console.log("url", url);

const dbName = "web_backFront";

const client = new MongoClient(url, { useUnifiedTopology: true });

const getDatabase = (callback) => {
  //console.log("databaseeee");
  client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    //console.log("Database", db);
    callback(db, client);
  });
};

const findDocuments = function (db, callback) {
  console.log("Finding offers");
  const collection = db.collection("offers");
  collection.find({}).toArray(function (err, docs) {
    assert.equal(err, null);
    callback(docs);
  });
};

const postOffer = function (document, db, callback) {
  console.log("Saving offer");
  const collection = db.collection("offers");
  collection.insertOne(document, function (err, docs) {
    assert.equal(err, null);
    callback(docs.ops[0]);
  });
};

exports.getDatabase = getDatabase;
exports.findDocuments = findDocuments;
exports.postOffer = postOffer;
