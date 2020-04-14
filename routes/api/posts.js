const router = require('express').Router();
const postController = require('../../controllers/postController');

module.exports = router;

// Get Route - show all posts
router.route('/').get(postController.findAll);

// Post route - create new post
router.route('/').post(postController.createPost);

// Delete route - delete post
router.route('/delete/').post(postController.deletePost)