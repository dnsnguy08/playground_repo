const router = require('express').Router();
const User = require('../../models/User');

// TODO: Use try/catch to catch errors
// TODO: Return the appropriate HTTP status codes

// GET a user
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({error: 'No user found'});
    }
    res.json(userData);
  } catch (error) {
    res.status(500).json({error});
  }
});

// UPDATE a user
router.put('/:id', async (req, res) => {
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id,
      }
    })
    if (!user) {
      return res.status(404).json({error: 'No user found'});
    }
    res.json(userData);
  } catch (error) {
    res.status(500).json({error});
  }
});

// DELETE a user
router.delete('/:id', async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    })

  } catch (error) {
    res.status(500).json({error});
  }
});

module.exports = router;
