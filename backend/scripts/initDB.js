const mongoose = require('mongoose');
const User = require('../models/User');

const initDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/trainer_db', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    // Check if admin user exists
    const adminExists = await User.findOne({ email: 'Admin@gmail.com' });
    
    if (!adminExists) {
      const adminUser = new User({
        email: 'Admin@gmail.com',
        password: 'Admin123'
      });
      
      await adminUser.save();
      console.log('Admin user created successfully');
    } else {
      console.log('Admin user already exists');
    }
    
    mongoose.connection.close();
  } catch (err) {
    console.error('Error initializing database:', err);
  }
};

initDB();