const router = require('express').Router();
const Post = require('../models/Post');

// 投稿作成する
router.post('/', async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    return res.status(200).json(savedPost);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
