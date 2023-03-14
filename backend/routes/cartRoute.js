//CRUD

var express = require("express");
var router = express.Router();
var db = require("../database.js");

//Get categories
router.get("/", function (req, res, next) {
    var sql = "select *";
    var params = [];
    db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        message: "success",
        data: rows,
      });
    });
  });

