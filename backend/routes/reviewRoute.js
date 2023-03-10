var express = require('express');
var router = express.Router();
var db = require("../database.js")



//Post (Create)
router.post('/', async (req, res) => {
    try {
        const newData = new db(req.body);
        const savedData = await newData.save();
        res.json(savedData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//Get (Read) all reviews for a product
router.get('/product/:id', function(req, res, next) {
    var sql = "SELECT review.id AS reviewId, rating,	reviewText,	username FROM review INNER JOIN user ON review.userId = user.id WHERE review.productId = " + req.params.id
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
    });
});

//get review by id
router.get('/:id', function(req, res, next) {
    var sql = "SELECT productId, rating, reviewText, username review.userId AS userId FROM review INNER JOIN user ON review.userId = user.id WHERE review.id = " + req.params.id;
    var params = [];
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
    });
});


//Put (Update)
router.put('/:id', async (req, res) => {
    try {
        const updatedData = await db.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


//Delete review by id
router.delete('/:id', function(req, res, next) {
    var sql = "DELETE FROM reviews WHERE id = " + req.params.id;
    var params = [req.params.id];
    db.run(sql, params, function(err, result) {
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "message":"deleted",
            "changes": this.changes
        })
    });
});
//Delete reviews by product id
router.delete('/:id', function(req, res, next) {
    var sql = "DELETE FROM reviews WHERE productId = " + req.params.id;
    var params = [req.params.id];
    db.run(sql, params, function(err, result) {
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "message":"deleted",
            "changes": this.changes
        })
    });
});


module.exports = router;