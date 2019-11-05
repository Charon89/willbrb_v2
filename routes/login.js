const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const registration = require('../models/registration');

const email_regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const password_regexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

router.use(bodyParser.urlencoded({
    extended: false
}));

router.get('/', (req, res) => {
    res.render('Login');
});

router.post("/", (req, res) => {
    /*************SERVER SIDE VALIDATION *******************/
    let login_errors = {
        email: "",
        password: "",
    };
    if (req.body.login_email_name == "") {
        login_errors.email = "E-mail address required"
    }
    if (email_regexp.test(req.body.login_email_name) == false && req.body.login_email_name != "") {
        login_errors.email = "Not valid E-mail"
    }
    if (req.body.login_password_name == "") {
        login_errors.password = "Password required"
    }
    if (password_regexp.test(req.body.login_password_name) == false && req.body.login_password_name != "") {
        login_errors.password = "Password should contain at least one digit, one lower and upper case letter and not less then 8 characters";
    }

    /*************END SERVER SIDE VALIDATION *******************/

    //This means that there are errors therefore we want to re-render the current form
    if (login_errors.email.length == 0 && login_errors.password.length == 0) {
        res.redirect("Home")

    } else {
        res.render("Login", {
            message: login_errors,
            r_email: req.body.login_email_name
        })
    }
});
module.exports = router;