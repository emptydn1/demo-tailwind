const postMessage = require("../models/postMessage");

const getPosts = async (req, res, next) => {
    try {
        const postMessages = await postMessage.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
        // next(error);
    }
    res.send("ok con de");
};

const createPort = async (req, res) => {
    const { post } = req.body;
    try {
        const newPost = await postMessage(post);
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

module.exports = {
    getPosts,
    createPort,
};
