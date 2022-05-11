const express = require('express');



const post = require('../Controllers/postController')
const router = express.Router();



router.get('/', post.getAllPosts)

router.post('/', post.createPost)   

router.put('/:id', post.updatePost)
router.delete('/:id', post.deletePost)



module.exports = router;

