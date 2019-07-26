const express=require("express");
const server=express();
server.listen(3000);
const bodyParser=require('body-parser');
const product=require('./router/product.js');
server.use(express.static('pubic'));
server.use(bodyParser.urlencoded({extended:false}));
//2.2跨域
const cors=require("cors");
server.use(cors({
    origin:["http://127.0.0.1:8080",
    "http://localhost:8080"],
    credentials:true
}));
const session=require("express-session");
 //2.3:session
server.use(session({
    secret:"128位字符串",
    resave:true,
    saveUninitialized:true
  }));
server.use(express.static("pubic"));
server.use("/pro",product);