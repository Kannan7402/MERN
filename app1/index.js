const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const cookieparser = require('cookie-parser');
require('dotenv').config(); 

const app = express();
const authRouter = require('../app1/routers/authRouter')
app.use(cors());
app.use(helmet()); 
app.use(cookieparser()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

app.use('/api/auth',authRouter)

app.get('/', (req, res) => {
  res.json({ message: "Hello from server" });
});

const port = process.env.PORT || 8000; 
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
