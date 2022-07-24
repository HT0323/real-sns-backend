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

// 投稿を更新する
router.put('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({
        $set: req.body,
      });
      return res.status(200).json('投稿の編集に成功しました');
    } else {
      return res.status(403).json('他のユーザの投稿を編集できません');
    }
  } catch (err) {
    return res.status(403).json(err);
  }
});

module.exports = router;
