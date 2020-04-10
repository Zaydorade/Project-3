const router = require('express').Router();
const userController = require('../../controllers/userController');

module.exports = router;

// Get Route - show all Users
router.route('/').get(userController.findAll);

// Post route - create new user
router.route('/').post(userController.createUser);

// Delete route - delete user
router.route('/delete/').post(userController.deleteUser)