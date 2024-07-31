const express=require('express');

const app=express();

app.get('/',(req,res)=>{
    res.end('hi');
});

app.listen(3000,()=>{
    console.log("server is running in the port 3000");
});