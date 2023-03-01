var express = require('express');
var router = express.Router();
var db = require("../database.js")



//Post (Create)
router.get('/login', async (req, res) => {
    try {
        const newData = new db(req.body);
        const savedData = await newData.save();
        res.json(savedData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});