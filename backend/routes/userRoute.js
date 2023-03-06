var express = require("express");
var router = express.Router();
var db = require("../database.js");
const bcrypt = require("bcrypt");

function comparePass(password, hash) {
  if (bcrypt.compare(password, hash)) {
    return true;
  } else {
    return false;
  }
}

//Post (Create)
router.post("/register/", function (req, res, next) {
  let username = req.body.username;
  let password = req.body.password;
  let email = req.body.email;

  bcrypt.hash(password, 10, function (err, hash) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    var sql =
      'insert into user (username, email, password) values("' +
      username +
      '", "' +
      email +
      '", "' +
      hash +
      '")';
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
});

// login function
router.get("/login/", function (req, res, next) {
  let password = req.body.password;
  let email = req.body.email;

  var sql = 'select password from user where email ="' + email + '"';
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    bcrypt.compare(password, rows[0].password, function (err, status) {
      if (err) {
        res.status(401).json({error: err.message});
      } else if (!status) {
        console.log("Login failed: no status.");
        res.status(401).json({error:"Login failed."});
    } else {
        res.json({ message: "success" });
        return;
      }
    });
  });
});

// get username from userid
router.get("/:id", function (req, res, next) {
  var sql = "select username, email from user where id = " + req.params.id;
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

module.exports = router;
