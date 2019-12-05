const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

// This part connects to MySQL server
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    
})

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('Connection successful')
});


// This launches an instance of the express framework
const app = express();
const port = 8000;

// This is for importing the routes of the API
// require('./app/routes')(app,{});




// This is for launching the api in the browser
app.listen(port, () => {
    console.log('We are live on port ' + port)
})

app.get('/createdb',(res,req)=>{
    let mysql = "CREATE DATABASE mynotes";
    db.query(mysql,(err,results)=>{
        if(err){
            throw err;
        };
        console.log(results);
        res.send("Databse Created");
    })
})

app.post('/notes',(res,req)=>{
    res.send('We are coming from Notes routes')
});