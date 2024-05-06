import mongoose from 'mongoose';
import express from 'express';
const app = express();

// Connect to your MongoDB database using Mongoose
const dbname='mongodb+srv://kalirishik:Kali%402003@kali.mstnhxl.mongodb.net/test';
mongoose.connect(dbname, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
// db.on("open",()=>{
//     console.log("Connected to the database");
// })
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

// Define your Mongoose schema and model here
const fruitSchema = new mongoose.Schema({
  name: String,
  price: Number,
  benefits: String
});
const Fruit = mongoose.model('fruit', fruitSchema);

// Set up your Express routes to retrieve and display data
app.get('/items', async (req, res) => {
  try {
    const items = await Fruit.find({});
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving data');
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
