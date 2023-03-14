var express = require("express");
var router = express.Router();
var db = require("../database.js");

//Post (Create)
router.post("/", async (req, res) => {
  try {
    const newData = new db(req.body);
    const savedData = await newData.save();
    res.json(savedData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get (Read) all products
router.get("/", function (req, res, next) {
  var sql = "select * from product";
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
//Get (Read) all products by category
// valid :name are "Deals", "New", "Books", "Newspapers"
router.get("/category/:name", function (req, res, next) {
  var sql = 'SELECT * FROM product INNER JOIN productCategory ON productCategory.productID = product.Id INNER JOIN category ON category.id = productCategory.categoryID WHERE category.name = "' +req.params.name+'"';
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

//get Product by id
router.get("/:id", function (req, res, next) {
  var sql = "select * from product where Id = " + req.params.id;
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

//Put (Update)
router.put("/:id", async (req, res) => {
  try {
    const updatedData = await db.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put("/:id/sql", async (req, res) => {
  var sql = 'UPDATE product SET Name ="'+req.body.Name+'", Author = "'+req.body.Author+'", Description = "'+req.body.Description+'", Price = '+req.body.Price+', countInStock = "'+req.body.countInStock+'" WHERE Id = "'+req.params.id+'"';
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

//Delete product by id
router.delete("/:id", function (req, res, next) {
  var sql = "DELETE FROM product WHERE Id = ?";
  var params = [req.params.id];
  db.run(sql, params, function (err, result) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: "deleted",
      changes: this.changes,
    });
  });
});

module.exports = router;
