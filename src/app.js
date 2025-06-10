let express=require("express");
let app=express();
let bodyparser=require("body-parser");
let session=require("express-session");

let router=require("../src/routes/regRoutes");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set('view engine','ejs');
module.exports=app;