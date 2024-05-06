import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import bcrypt from 'bcrypt';
const app = express();
const PORT = 2000;
const { json } = bodyparser;
import cors from 'cors';
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb+srv://kalirishik:Kali%402003@kali.mstnhxl.mongodb.net/project', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const con=mongoose.connection;
con.on("open",()=>{
    console.log("Connected to the database");
})
con.on("error",()=>{
    console.log("Connection failed");
})
const user=new mongoose.Schema({
  username: String,
  email: String,
  password: String
})
const User = mongoose.model('User',user);

app.use(json());

// Registration endpoint
app.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
