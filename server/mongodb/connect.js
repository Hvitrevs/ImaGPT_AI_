import mongoose from 'mongoose';

const connectDB = (url) => {
  mongoose.set('strictQuery', true);
  mongoose.connect(url)
    .then(() => console.log('Home server is connected to MongoDB'))
    .catch((err) => {
      console.error('Home server has failed to connect with MongoDB');
      console.error(err);
    });
};

export default connectDB;
