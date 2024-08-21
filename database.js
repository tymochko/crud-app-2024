const mongoose = require('mongoose');

const DB_URI = 'mongodb://127.0.0.1:27017/mydatabase';  // Або будь-яке інше ім'я для твоєї бази даних

mongoose.connect(DB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));
