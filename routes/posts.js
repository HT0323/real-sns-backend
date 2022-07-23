const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('posts router');
});

module.exports = router;
