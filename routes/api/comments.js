const router = require('express').Router();
const commentController = require('../../controllers/commentController');

module.exports = router;

// Get Route - show all comments
router.route('/').get(commentController.findAll);

// Post route - create new comment
router.route('/').post(commentController.createComment);

// Delete route - delete comment
router.route('/delete/').post(commentController.deleteComment)