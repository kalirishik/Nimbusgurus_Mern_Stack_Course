import express from 'express';
const port=1000;
const app=express();
app.listen(port,()=>{
    console.log(`Server is running on the ${port}`);
});
app.get("/",(req,res)=>{
    res.send("<h1>WELCOME TO EXPRESS JS</h1>")
})
app.post("/register",(req,res)=>{
    res.send(201);
})
app.put("/update/jack",(req,res)=>{
    res.send(200);
})
app.patch("/update/data",(req,res)=>{
    res.send(400);
})
app.delete("/data",(req,res)=>{
    res.send(404);
})