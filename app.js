const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config');
const PORT = 3000;
const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: false
}));

//Import routes
const room_listing_route = require('./routes/room_listing');
const home_route = require('./routes/home');
const registration_route = require('./routes/user');
const login_route = require('./routes/login');

//ROUTES
app.use('/RoomListing', room_listing_route);
app.use('/Home', home_route);
app.use('/', home_route);
app.use('/UserRegistration', registration_route);
app.use('/Login', login_route);

//MongoDB
const mongo_db = process.env.DB_CONNECTION;
mongoose.connect(mongo_db, {
useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true // commented out currently
})
    .then(() => {

            console.log(`You have successfully connected to your mongoDB database`);
        })
        .catch((err) => {
            console.log(`Sorry, something occured :${err}`);
        });;



app.listen(process.env.PORT || PORT, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});