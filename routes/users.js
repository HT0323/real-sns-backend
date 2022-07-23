const User = require('../models/User');
const router = require('express').Router();

// ユーザー情報の更新
router.put('/:id', async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json('ユーザー情報が更新されました');
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json('対象外のユーザー情報を更新できません');
  }
  res.send('posts router');
});

// ユーザー情報の削除
router.delete('/:id', async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json('ユーザー情報が削除されました');
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json('対象外のユーザー情報を削除できません');
  }
  res.send('posts router');
});

module.exports = router;
