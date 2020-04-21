const router = require('express').Router();
const userRoutes = require('./users');
const steamRoutes = require('./steam');

router.use('/users', userRoutes);
router.use('/steam', steamRoutes);

module.exports = router;