const express = require("express");
const router = express.Router();
const Post = require("../models/Post.model")

router.post("/", async (req, res, next) => {
    console.log(req.body)
    try {
        const newPost = await Post.create(req.body)
        res.json(newPost)
    } catch (error) {
        res.status(500).json(error.message)
        next(error)
    }
})

router.get("/", async (req, res, next) => {
    try {
        const posts = await Post.find().sort({createdAt: -1})
        res.json(posts)
    } catch (error) {
        console.log(error)
        next(error)
    }
});

router.get("/:postId", async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.postId)
        res.json(post)
    } catch (error) {
        console.log(error)
        next(error)
    }
});

router.put("/:postId", async (req, res, next) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.postId, req.body, {new: true} )
        res.json(post)
    } catch (error) {
        console.log(error)
        next(error)
    }
});

router.delete("/:postId", async (req, res, next) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.postId, req.body, {new: true} )
        res.status(204).json("post deleted")
    } catch (error) {
        console.log(error)
        next(error)
    }
});

module.exports = router;