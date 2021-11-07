import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';

const PORT = process.env.PORT || 5005;
const DB_URL = `mongodb+srv://user:1234@cluster0.ovsxf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());

app.use('/api', router);

const start = async () => {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log('!!Error: ', error);
  }
}

start();
