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