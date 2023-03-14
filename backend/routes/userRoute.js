var express = require("express");
var router = express.Router();
var db = require("../database.js");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

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
      'insert into user (username, email, password, admin) values("' +
      username +
      '", "' +
      email +
      '", "' +
      hash +
      '", "0")';
    var params = [];
    db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      const token = jwt.sign({email: email, password: password}, "insecurePass")
      return res.json({token});
    });
  });
});

// login function
router.post("/login/", function (req, res, next) {
  let password = req.body.password;
  let email = req.body.email;

  var sql = 'select password, admin from user where email ="' + email + '"';
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if(typeof rows[0] === 'undefined' || rows[0] === null) {
      res.status(500).json({ error: "That user does not exist!" });
      return;
    }

    bcrypt.compare(password, rows[0].password, function (err, status) {
      if (err) {
        res.status(401).json({ error: err.message });
      } else if (!status) {
        console.log("Login failed: no status.");
        res.status(401).json({ error: "Login failed." });
      } else {
        const token = jwt.sign({email: email, password: password, admin:rows[0].admin}, "insecurePass")
        return res.json({token});
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

// confirm admin status
router.post("/admin/", function (req, res, next) {
  let password = req.body.password;
  let email = req.body.email;

  var sql = 'select password, admin from user where email ="' + email + '"';
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if(typeof rows[0] === 'undefined' || rows[0] === null) {
      res.status(500).json({ error: "That user does not exist!" });
      return;
    }

    bcrypt.compare(password, rows[0].password, function (err, status) {
      if (err) {
        res.status(401).json({ error: err.message });
      } else if (!status) {
        console.log("Login failed: no status.");
        res.status(401).json({ error: "Unauthorized entry." });
      } else {
        return res.status(200).json({admin:"true"});
      }
    });
  });
});