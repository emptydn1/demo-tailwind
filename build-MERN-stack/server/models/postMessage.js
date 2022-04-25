const mongoose = require("mongoose");
const { Schema } = mongoose;
// const chuyenthanhobjectid = require('mongodb').ObjectID;

const postSchema = new Schema(
    {
        title: String,
        message: String,
        create: String,
        tags: [String],
        selectedFile: String,
        likeCount: {
            type: Number,
            default: 0,
        },
        createdAt: {
            type: Date,
            default: new Date(),
        },
    },
    { collection: "posts" }
);

module.exports = mongoose.model("PostMessage", postSchema);
