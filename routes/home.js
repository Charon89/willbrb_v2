const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const stay = require('../models/stay');

router.use(bodyParser.urlencoded({
    extended: false
}));

router.get('/', (req, res) => {
    res.render('Home');
});

router.post("/", (req, res) => {
    /*************SERVER SIDE VALIDATION *******************/
    const errors = {
        where: "",
        check_in: "",
        check_out: "",
        check_date_before: ""
    }; // array length is initially 0
    if (req.body.booking_where_name == "Anywhere") {
        errors.where = "Choose a valid city"
    }
    if (req.body.booking_checkin_name == "") {
        errors.check_in = "Choose a valid date"
    }
    if (req.body.booking_checkout_name == "") {
        errors.check_out = "Choose a valid date"
    }
    if (req.body.booking_checkin_name > req.body.booking_checkout_name) {
        errors.check_date_before = "Check-in date should be before check-out date"
    }
    /*************END SERVER SIDE VALIDATION *******************/

    //This means that there are errors therefore we want to re-render the current form
    if (errors.where != "" && errors.check_in != "" & errors.check_out != "" & errors.check_date_before != "")
        res.render("Home")
    else {
        res.render("Home", {
            message: errors
        })
    }
});
module.exports = router;