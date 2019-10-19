var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose", {}),
    passport        = require("passport"),
    LocalStrategy   = require("passport-local"),
    methodOverride  = require("method-override"),
    User            = require("./models/user"),
    flash           = require('connect-flash')

// requiring routes
var indexRoutes      = require("./routes/index");


// mongoose.connect("", { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash())

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));

// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// app.use(function(req, res, next){
//     res.locals.currentUser = req.user;
//     res.locals.error=req.flash("error")
//     res.locals.success=req.flash("success")
//     next();
// });

app.use("/", indexRoutes);

app.listen(process.env.PORT||1234, process.env.IP, function(){
   console.log("Server started on port 1234");
});