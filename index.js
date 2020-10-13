import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';

import router from './router.js';

const app = express();

mongoose.connect(process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, () => {
  console.log('Connect to database success');
});

app.use(morgan('dev'));
app.use(express.json());


app.get('/', (req, res, next) => {
  res.json({
    message: 'success',
  });
});

app.use('/api', router);

app.listen(process.env.PORT, () => {
  console.log(`App listens to port ${process.env.PORT}`);
});