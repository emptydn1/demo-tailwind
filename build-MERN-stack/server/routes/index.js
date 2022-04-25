const express = require("express");
const { getPosts, createPort } = require("./../controllers/posts");
const router = express.Router();

router.get("/", getPosts);
router.post("/", createPort);
module.exports = router;
