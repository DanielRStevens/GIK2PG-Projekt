const express = require('express');
const router = express.Router();
var db = require("../database.js")


class Api{
    url = ";"

    constructor(url){
    this.url=url
    }

}

//post
router.post('/', async (req, res) => {
    try {
        const newData = new db(req.body);
        const savedData = await newData.save();
        res.json(savedData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


//get
router.get('/', async (req, res) => {
    try {
        const allData = await Data.find();
        res.json(allData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


//put
router.put('/:id', async (req, res) => {
    try {
        const updatedData = await Data.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


//delete
router.delete('/:id', async (req, res) => {
    try {
        const deletedData = await Data.findByIdAndDelete(req.params.id);
        res.json(deletedData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



module.exports = router;