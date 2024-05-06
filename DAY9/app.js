import express from 'express';
import mongoose from 'mongoose';
const app=express()
const port=4000;
mongoose.connect("mongodb+srv://kalirishik:Kali%402003@kali.mstnhxl.mongodb.net/test",{useNewUrlParser:true});
const con=mongoose.connection;
con.on("open",()=>{
    console.log("Connected to the database");
})
con.on("error",()=>{
    console.log("Connection failed");
})
const fruit=new mongoose.Schema({
    name:String,
    price:Number,
    benefits:String
});
const Fruit=mongoose.model('fruits',fruit);
app.use(express.json());
app.listen(port,()=>{
    console.log(`Server is Running on the ${port}`);
})
app.get("/items",async(req,res)=>{
    try{
        const fruits=await Fruit.find({});
        res.json(fruits);
    }
    catch(e){
        res.send(e);
    }
})
app.post("/", async (req, res) => {
    const fruits = new Fruit({
      name: req.body.name,
      price: req.body.price,
      benefits: req.body.benefits
    });
    try {
      const data = await fruits.save();
      res.json(data);
    } catch (e) {
      console.log("Error:", e);
      res.status(500).send(e); 
    }
  });
  app.get("/items/:id",async(req,res)=>{
        try{
            const id= await Fruit.findById(req.params.id);
            res.json(id);
        }catch(e){
            console.log("Error",e);
        }
  });
  app.patch("/items/:id",async(req,res)=>{
    try{
        const fruit=await Fruit.findById(req.params.id);
        fruit.price=req.body.price
        const result=fruit.save()
        res.send("Successfull",result)
    }catch(e){
        res.send("Error : ",e)
    }
  })
  