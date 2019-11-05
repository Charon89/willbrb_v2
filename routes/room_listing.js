const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const stay = require('../models/stay');
router.use(bodyParser.urlencoded({
    extended: false
}));

router.get('/', (req, res) => {
    res.render('RoomListing');
});

//Search validation
router.post("/", (req, res) => {
    let error = "";
    if (req.body.search_field_name == "") {
        error = "Please enter a city to search";
    }
    if (error != "") {
        res.render("RoomListing", {
            message: error
        })
    } else {
        error = req.body.search_field_name;
        res.render("RoomListing", {
            message: error
        })
    }
});

module.exports = router;