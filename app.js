import express from "express";
import bodyParser from "body-parser";
import consolidate from "consolidate";
import cookieParser from "cookie-parser";
import cookieSession from "cookie-session";
import uuid from "uuid";

import logger from "morgan";
import multer from "multer";


const app = express ();
app.listen ( 8080 , function () {
	console.log ( 'server start...' );
} )
//view engine
app.set ( 'view engine' , 'html' );
app.set ( 'views' , './views' );
app.engine ( 'html' , consolidate.ejs );

//set static source
app.use(express.static('./public'))

//middle ware
app.use(bodyParser.urlencoded({extended:true,limit:"500mb"}));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(cookieParser('dunmin'));
app.use(cookieSession({
	genid:function () {
		return uuid.v1();
	},
	maxAge:1000*60*20,
	secret:"dunmin"
}));
//app.use(logger('dev'));
app.use(logger('combined',{stream:require("fs").createWriteStream('./logger/logs.log',{flags:'a'})}));


//router set

app.use('/admin',require('./routes/admin/adminRouter1'))
