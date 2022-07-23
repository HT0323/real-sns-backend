const express = require('express');
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const postsRouter = require('./routes/posts');

const PORT = 3000;
const app = express();

app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/posts', postsRouter);

app.listen(PORT, () => {
  console.log('hello');
});
