var express = require('express');
var port = 8090;
var app = express();
var bodyParser= require("body-parser");

app.set('views', './view')
app.set('view engine', 'ejs' )

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/index',(req,res)=>{
    res.render(__dirname+"/view/index.ejs")
})

app.post('/form-submit',(req,res)=>{
    res.send(req.body)
})

app.listen(port, (err)=>{
    if(err) throw err
    console.log(`Server is running on port ${port}`);
})