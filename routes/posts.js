const express = require('express');
const router = express.Router();
const Post = require('../models/Posts');

//GET BACK ALL THE POSTS
router.get('/', async(req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
});

//GET AN SPECIFIC POST
router.get('/:postId', async(req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
});

//SUBMITS A POST
router.post('/', async(req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    }
});

//DELETE A POST
router.delete('/:postId', async(req, res) => {
    try {
        const postToDelete = await Post.findByIdAndDelete(req.params.postId);
        res.json('Post deleted!');
    } catch (err) {
        res.json({ message: err });
    }
});

//UPDATE A POST --> change title
router.patch('/:postId', async(req, res) => {
    try {
        const postToUpdate = await Post.updateOne({ _id: req.params.postId }, { $set: { title: req.body.title } });
        res.json(postToUpdate);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;