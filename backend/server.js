const express = require("express");
const mysql= require('mysql');
const cors= require('cors');

const app =express();
app.use(cors());
app.use(express.json());

const db=mysql.createConnection({

    //TODO: enter in amazon RDS info
    host:"localhost",
    user: "root",
    password: "",
    database: "cppsignup"

})

app.post('/signup',(req,res)=>{
    const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?)";      const values=[
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql,[values],(err,data)=>{
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/login',(req,res)=>{
    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";     
    db.query(sql,[req.body.email,req.body.password],(err,data)=>{
        console.log(data[0].name)
        if(err){
            return res.json("Error");
        }
        if(data.length>0){
            return res.json({"name": data[0].name});
        }
        else{
            return res.json("Failed");
        }
    })
})


app.listen(8080,()=>{
    console.log("listening");
})