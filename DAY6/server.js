import express from 'express';
import { connect, model } from 'mongoose';
import { json } from 'body-parser';
const app = express();
const PORT = 2000;

connect('mongodb+srv://kalirishik:Kali%402003@kali.mstnhxl.mongodb.net/project', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const User = model('User', {
  username: String,
  email: String,
  password: String
});

app.use(json());

// Registration endpoint
app.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Add validation and password hashing logic here
    // For password hashing, consider using a library like bcrypt

    const user = new User({ username, email, password });
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

    // Validate the user's credentials
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
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
