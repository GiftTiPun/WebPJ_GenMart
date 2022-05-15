const express = require('express');
const app = express();
const fs = require('fs');
const hostname = 'localhost';
const port = 3000;
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const multer = require('multer');
const path = require('path');
const mysql = require('mysql');

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, 'GENSHINWEBPJ/img/');
    },

    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });

const imageFilter = (req, file, cb) => {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

// ใส่ค่าตามที่เราตั้งไว้ใน mysql
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "7894561230blink",
    database: "pj_web"
})

con.connect(err => {
    if(err) throw(err);
    else{
        console.log("MySQL connected");
    }
})

const queryDB = (sql) => {
    return new Promise((resolve,reject) => {
        // query method
        con.query(sql, (err,result, fields) => {
            if (err) reject(err);
            else
                resolve(result)
        })
    })
}

app.post('/regisDB', async (req,res) => {
    let sql = "CREATE TABLE IF NOT EXISTS userInfo (id INT AUTO_INCREMENT PRIMARY KEY, reg_date TIMESTAMP, username VARCHAR(255), email VARCHAR(100),password VARCHAR(100),img VARCHAR(100))";
    let result = await queryDB(sql);
    sql = `INSERT INTO userInfo (username, email, password,img) VALUES ("${req.body.username}", "${req.body.email}", "${req.body.password}",'avatar.png')`;
    result = await queryDB(sql);
    
    let sql_msg = "CREATE TABLE IF NOT EXISTS msgInfo (msg_id INT AUTO_INCREMENT PRIMARY KEY, user VARCHAR(255), message VARCHAR(100))";
    result = await queryDB(sql_msg);
    
    console.log("New record created successfullyone");
    return res.redirect('index.html');
})


let tablename = "userinfo";
//ทำให้สมบูรณ์
app.post('/checkLogin',async (req,res) => {

    let sql = `SELECT id, username, password, img FROM ${tablename}`;
    let result = await queryDB(sql);
    result = Object.assign({},result);
    console.log(result);
    const username = req.body.username;
    const password = req.body.password;

    let obj = Object.keys(result);
    var isCorrect = false;
    for(var i = 0 ; i < obj.length ; i++){
        var temp = result[obj[i]];
        var dataUsername = temp.username;
        var dataPassword = temp.password;
        if(dataUsername == username && dataPassword == password ){
            console.log("test");
            isCorrect = true;
            res.cookie('username', username);
            res.cookie('img', temp.img);
        }
    }

    if(isCorrect == true){
        console.log("Correct");
        return res.redirect('shoppingpage.html');
       
    }
    else{
        console.log("Wrong");
        return res.redirect('index.html?error=1');
    }
})


 app.listen(port, hostname, () => {
        console.log(`Server running at   http://${hostname}:${port}/index.html`);
});
