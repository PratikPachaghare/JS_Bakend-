const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send("this is a home page defult");
})

app.get('/requst',(req,res)=>{
    res.send("this from requist call !!! ");
})

app.listen(PORT,()=>{
    console.log(`server run at http://localhost:${PORT}`);
})