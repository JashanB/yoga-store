// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 5000;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const bodyParser = require("body-parser");
const cookieSession = require('cookie-session');
const sass       = require("node-sass-middleware");
const app        = express();
const morgan     = require('morgan');
const methodOverride = require('method-override');
const database   = require("./database");
const cors = require('cors')
const session = require('express-session');



app.use(morgan('dev'));
app.use(cors());
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));
app.use(session({secret: 'ssshhhhh'}));

// app.use(cookieSession({
//   name: 'session',
//   secret: 'yoga',
//   // Cookie Options
//   maxAge: 500 * 60 * 1000 // 5 minutes
// }));
// app.use(methodOverride('_method'));

// routes for testing
const homepageRoutes = require("./routes/homepage");
const loginRoutes = require("./routes/login");


// app.get('/home', (req, res) => {
//   res.send({ express: 'Hello From Express' });
// });

// app.post('/api/world', (req, res) => {
//   console.log(req.body);
//   res.send(
//     `I received your POST request. This is what you sent me: ${req.body.post}`,
//   );
// });

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.use("/home", homepageRoutes(database));
app.use("/login", loginRoutes(database));
