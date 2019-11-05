const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const user_record = require('../models/registration')

router.use(bodyParser.urlencoded({
    extended: false
}));

router.get('/', (req, res) => {
    res.render('UserRegistration');
});

router.post("/", (req, res) => {
    /*************SERVER SIDE VALIDATION *******************/
    const email_regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const password_regexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let registration_errors = {
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        birthday: ""
    };
    const new_user = {
        email: req.body.RegistrationEmail_name,
        first_name: req.body.RegistrationFirstName_name,
        last_name: req.body.RegistrationLastName_name,
        password: req.body.RegistrationPassword_name,
        birthdate: req.body.registration_birth_name,
        subscription: req.body.registration_subscription_name
    }
    if (req.body.registration_subscription_name == "on")
        new_user.subscription = "on";
    else
        new_user.subscription = "off";

    if (req.body.RegistrationEmail_name == "") {
        registration_errors.email = "E-mail address required"
    }
    if (email_regexp.test(req.body.RegistrationEmail_name) == false && req.body.RegistrationEmail_name != "") {
        registration_errors.email = "Not valid E-mail"
    }
    if (req.body.RegistrationFirstName_name == "") {
        registration_errors.first_name = "First name required"
    }
    if (req.body.RegistrationLastName_name == "") {
        registration_errors.last_name = "Last name required"
    }
    if (req.body.RegistrationPassword_name == "") {
        registration_errors.password = "Password required"
    }
    if (password_regexp.test(req.body.RegistrationPassword_name) == false && req.body.RegistrationPassword_name != "") {
        registration_errors.password = "Password should contain at least one digit, one lower and upper case letter and not less then 8 characters";
    }
    if (req.body.registration_birth_name == "") {
        registration_errors.birthday = "Day of birth required"
    }
    /*************END SERVER SIDE VALIDATION *******************/

    if (registration_errors.email.length == 0 && registration_errors.first_name.length == 0 && registration_errors.last_name.length == 0 && registration_errors.password.length == 0 && registration_errors.birthday.length == 0) {
        //  res.render("Home");
        const user = new user_record(new_user)
        user.save()
            .then(() => {
                console.log(`User ${new_user.first_name} was added to the database`);
                const sgMail = require('@sendgrid/mail');
                sgMail.setApiKey(process.env.SENDGRID_API_KEY);
                const msg = {
                    to: new_user.email,
                    from: 'Blizzdmytro@gmail.com',
                    subject: 'Welcome to WillBrB!',
                    text: ` `,
                    html: `<strong>Hello ${new_user.first_name}!</strong><p>Thank you for singning for our services.</p><p>We are looking forward to see you using our services</p>
                    <p> This email is generated automatically, and does not accept replies. </p> <strong>Regards,</strong><br>The WillBrB Team`,
                };
                sgMail.send(msg)
                    .then(() => {
                        console.log(`E-mail was sent successfully on ${new_user.email}`);
                    })
                    .catch(err => console.log(`Error : ${err}`));
                res.redirect("Home");
            })
            .catch(err => console.log(`Error : ${err}`))
    } else {
        res.render("UserRegistration", {
            message: registration_errors,
            r_email: req.body.RegistrationEmail_name,
            r_last_name: req.body.RegistrationLastName_name,
            r_first_name: req.body.RegistrationFirstName_name,
            r_password: req.body.RegistrationPassword_name,
            r_date_of_birth: req.body.registration_birth_name
        })
    }
});
module.exports = router;