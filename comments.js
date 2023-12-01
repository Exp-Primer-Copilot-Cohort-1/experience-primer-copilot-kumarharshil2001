// Create web server
// 1. Create express app
// 2. Create router
// 3. Create route handlers
// 4. Register route handlers
// 5. Export router
// 6. Import router in index.js
// 7. Register router in index.js
const express = require('express');
const router = express.Router({mergeParams: true});
const {createComment, getComment, deleteComment} = require('../handlers/comments');

// prefix - /api/users/:id/comments
router.route('/').post(createComment);

// prefix - /api/users/:id/comments/:comment_id
router.route('/:comment_id').get(getComment).delete(deleteComment);

module.exports = router;