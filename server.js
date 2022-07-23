const express = require('express');
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const postsRouter = require('./routes/posts');
const mongoose = require('mongoose');
require('dotenv').config();

// データベース接続
mongoose
  .connect(process.env.MONGOURL)
  .then(() => {
    console.log('connect');
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = 3000;
const app = express();

app.use(express.json());
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/posts', postsRouter);

app.listen(PORT, () => {
  console.log('hello');
});
