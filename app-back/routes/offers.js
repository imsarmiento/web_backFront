var express = require("express");
var router = express.Router();
const Mongolib = require("../db/Mongolib");

/* GET offer */
router.get("/", function (req, res, next) {
  Mongolib.getDatabase((db) => {
    Mongolib.findDocuments(db, (docs) => {
      console.log("Finding offers");
      //console.log("docs", docs);
      res.send(docs);
    });
  });
});

/* POST offer */
router.post("/", function (req, res, next) {
  Mongolib.getDatabase((db) => {
    console.log(req.body);
    Mongolib.postOffer(req.body, db, (doc) => {
      console.log("Posting offer");
      //console.log("docs", docs);
      res.send(doc);
    });
  });
});

module.exports = router;
