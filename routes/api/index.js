const router = require('express').Router();
const userRoutes = require('./users');
const steamRoutes = require('./steam');
const authRoutes = require('./auth')
const avatarRoutes = require('./avatar')

router.use('/avatar', avatarRoutes);
router.use('/users', userRoutes);
router.use('/steam', steamRoutes);
router.use('/auth', authRoutes)

module.exports = router;